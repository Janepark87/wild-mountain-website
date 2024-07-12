import { ReservationEditForm } from '@/src/components';

export default async function page({ params }) {
	const { bookingId } = params;

	return (
		<div className="mx-auto w-[60rem] max-w-3xl pb-4">
			<h2 className="mb-7 text-2xl font-semibold text-accent-400">
				Edit Reservation #{bookingId}
			</h2>

			<ReservationEditForm bookingId={bookingId} />
		</div>
	);
}
