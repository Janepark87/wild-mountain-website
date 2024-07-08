import { getSettings } from '@/src/services/apiSettings';
import { getBookedDatesByCabinId } from '@/src/services/apiBookings';
import { CabinReservationForm, DateSelector, LoginMessage } from '..';
import { auth } from '@/src/auth/auth';

export default async function CabinReservation({ cabin }) {
	const [settings, bookedDated] = await Promise.all([
		getSettings(),
		getBookedDatesByCabinId(cabin.id),
	]);
	const session = await auth();

	return (
		<div className="grid lg:grid-cols-2">
			<DateSelector
				settings={settings}
				bookedDates={bookedDated}
				cabin={cabin}
			/>
			{session?.user ? (
				<CabinReservationForm cabin={cabin} user={session.user} />
			) : (
				<LoginMessage />
			)}
		</div>
	);
}
