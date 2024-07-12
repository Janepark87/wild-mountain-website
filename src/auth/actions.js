'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { supabase } from '../services/supabase';
import { auth, signIn, signOut } from './auth';
import { getBookings } from '../services/apiBookings';

async function validateUser() {
	const session = await auth();
	if (!session) throw new Error('You must be logged in!');

	return session;
}

function validNationalID(value) {
	if (!/^[a-zA-Z0-9]{6,12}$/.test(value))
		throw new Error('Please provide a valid national ID.');
}

async function validateUserBooking(session, bookingId, note = 'update') {
	const guestBookings = await getBookings(session.user.guestId);
	const guestBookingIds = guestBookings.map((booking) => booking.id);
	const isYourBooking = guestBookingIds.includes(bookingId);
	if (!isYourBooking)
		throw new Error(`You are not allowed to ${note} this booking!`);
}

export async function updateGuestProfile(formData) {
	const session = await validateUser();

	const [nationality, countryFlag] = formData.get('nationality').split('%');
	const nationalID = formData.get('nationalID');

	validNationalID(nationalID);

	const updatedData = { nationality, nationalID, countryFlag };
	const { error } = await supabase
		.from('guests')
		.update(updatedData)
		.eq('id', session.user.guestId);

	if (error) throw new Error('Guest could not be updated');

	revalidatePath('/account/profile');
}

export async function deleteReservation(bookingId) {
	const session = await validateUser();

	await validateUserBooking(session, bookingId, 'delete');

	const { error } = await supabase
		.from('bookings')
		.delete()
		.eq('id', bookingId);

	if (error) throw new Error('Booking could not be deleted');

	revalidatePath('/account/reservations');
}

export async function updateReservation(formData) {
	const session = await validateUser();

	const formEntries = Object.fromEntries(formData.entries());
	let { bookingId, numGuests, observations } = formEntries;

	bookingId = Number(bookingId);

	const updatedData = {
		numGuests: Number(numGuests),
		observations: observations.slice(0, 1000),
	};

	await validateUserBooking(session, bookingId);

	const { error } = await supabase
		.from('bookings')
		.update(updatedData)
		.eq('id', bookingId);

	if (error) throw new Error('Your booking could not be updated');

	revalidatePath('/account/reservations');
	revalidatePath(`/account/reservations/edit/${bookingId}`);
	redirect('/account/reservations');
}

export async function signInAction() {
	const PROVIDER = 'google';
	await signIn(PROVIDER, {
		redirectTo: '/account',
	});
}

export async function signOutAction() {
	await signOut({ redirectTo: '/' });
}
