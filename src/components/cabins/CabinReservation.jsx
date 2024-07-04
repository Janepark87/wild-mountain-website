import { getSettings } from '@/src/services/apiSettings';
import { getBookedDatesByCabinId } from '@/src/services/apiBookings';
import { CabinReservationForm, DateSelector } from '..';

export default async function CabinReservation({ cabin }) {
	const [settings, bookedDated] = await Promise.all([
		getSettings(),
		getBookedDatesByCabinId(cabin.id),
	]);

	return (
		<div className="grid lg:grid-cols-2">
			<DateSelector
				settings={settings}
				bookedDates={bookedDated}
				cabin={cabin}
			/>
			<CabinReservationForm cabin={cabin} />
		</div>
	);
}
