import { eachDayOfInterval } from 'date-fns';

export async function getBookings(guestId) {
	const { data, error, count } = await supabase
		.from('bookings')
		// We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
		.select('id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)')
		.eq('guestId', guestId)
		.order('startDate');

	if (error) {
		console.error(error);
		throw new Error('Bookings could not get loaded');
	}

	return data;
}

export async function getBooking(id) {
	const { data, error, count } = await supabase.from('bookings').select('*').eq('id', id).single();

	if (error) {
		console.error(error);
		throw new Error('Booking could not get loaded');
	}

	return data;
}

export async function getBookedDatesByCabinId(cabinId) {
	let today = new Date();
	today.setUTCHours(0, 0, 0, 0);
	today = today.toISOString();

	// Getting all bookings
	const { data, error } = await supabase.from('bookings').select('*').eq('cabinId', cabinId).or(`startDate.gte.${today},status.eq.checked-in`);

	if (error) {
		console.error(error);
		throw new Error('Bookings could not get loaded');
	}

	// Converting to actual dates to be displayed in the date picker
	const bookedDates = data
		.map((booking) => {
			return eachDayOfInterval({
				start: new Date(booking.startDate),
				end: new Date(booking.endDate),
			});
		})
		.flat();

	return bookedDates;
}

export async function createBooking(newBooking) {
	const { data, error } = await supabase
		.from('bookings')
		.insert([newBooking])
		// So that the newly created object gets returned!
		.select()
		.single();

	if (error) {
		console.error(error);
		throw new Error('Booking could not be created');
	}

	return data;
}

export async function updateBooking(id, updatedFields) {
	const { data, error } = await supabase.from('bookings').update(updatedFields).eq('id', id).select().single();

	if (error) {
		console.error(error);
		throw new Error('Booking could not be updated');
	}
	return data;
}

export async function deleteBooking(id) {
	const { data, error } = await supabase.from('bookings').delete().eq('id', id);

	if (error) {
		console.error(error);
		throw new Error('Booking could not be deleted');
	}
	return data;
}
