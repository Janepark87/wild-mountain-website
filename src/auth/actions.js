'use server';
import { revalidatePath } from 'next/cache';
import { supabase } from '../services/supabase';
import { auth, signIn, signOut } from './auth';
import { getBookings } from '../services/apiBookings';

export async function signInAction() {
	const PROVIDER = 'google';
	await signIn(PROVIDER, {
		redirectTo: '/account',
	});
}

export async function signOutAction() {
	await signOut({ redirectTo: '/' });
}

async function checkedSession() {
	const session = await auth();
	if (!session) throw new Error('You must be logged in!');

	return session;
}

function validNationalID(value) {
	if (!/^[a-zA-Z0-9]{6,12}$/.test(value))
		throw new Error('Please provide a valid national ID.');
}

async function updatedDataToSupabase(updatedData, session) {
	const { error } = await supabase
		.from('guests')
		.update(updatedData)
		.eq('id', session.user.guestId);

	if (error) throw new Error('Guest could not be updated');
}

export async function updateGuestProfile(formData) {
	const session = await checkedSession();

	const [nationality, countryFlag] = formData.get('nationality').split('%');
	const nationalID = formData.get('nationalID');
	validNationalID(nationalID);

	const updatedData = { nationality, nationalID, countryFlag };
	updatedDataToSupabase(updatedData, session);

	revalidatePath('/account/profile');
}

export async function deleteReservation(bookingId) {
	const session = await checkedSession();

	const guestBookings = await getBookings(session.user.guestId);
	const guestBookingIds = guestBookings.map((booking) => booking.id);
	const isYourBooking = guestBookingIds.includes(bookingId);
	if (!isYourBooking)
		throw new Error('You are not allowed to delete this booking!');

	const { error } = await supabase
		.from('bookings')
		.delete()
		.eq('id', bookingId);

	if (error) throw new Error('Booking could not be deleted');

	revalidatePath('/account/reservations');
}
