import Link from 'next/link';
import { auth } from '@/src/auth/auth';
import { getBookings } from '@/src/services/apiBookings';
import { ReservationList } from '@/src/components';

export const metadata = {
	title: 'Reservations',
};

export default async function page() {
	const session = await auth();
	const bookings = await getBookings(session.user.guestId);

	return (
		<div className="w-[60rem] pb-4 xl:w-full">
			<h2 className="mb-7 text-2xl font-semibold text-accent-400">
				Your reservations
			</h2>

			{bookings.length === 0 ? (
				<p className="text-lg">
					You have no reservations yet. Check out our{' '}
					<Link className="text-accent-500 underline" href="/cabins">
						luxury cabins &rarr;
					</Link>
				</p>
			) : (
				<ReservationList bookings={bookings} />
			)}
		</div>
	);
}
