import { getCabin } from '@/src/services/apiCabins';
import { getBookedDatesByCabinId } from '@/src/services/apiBookings';

export async function GET(request, { params }) {
	const { cabinId } = params;

	try {
		const [cabin, bookedDates] = await Promise.all([
			getCabin(cabinId),
			getBookedDatesByCabinId(cabinId),
		]);

		return Response.json({ cabin, bookedDates });
	} catch (error) {
		return Response.json({ message: `Cabin not found! ${error.message}` });
	}
}
