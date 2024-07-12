'use client';
import { useOptimistic } from 'react';
import { ReservationCard } from '..';
import { deleteReservation } from '@/src/auth/actions';

export default function ReservationList({ bookings }) {
	const [optimisticBookings, optimisticDelete] = useOptimistic(
		bookings,
		(curBookings, bookingId) => {
			return curBookings.filter((booking) => booking.id !== bookingId);
		}
	);

	const handleDeleteReservation = async (bookingId) => {
		optimisticDelete(bookingId);
		await deleteReservation(bookingId);
	};

	return (
		<ul className="space-y-6">
			{optimisticBookings.map((booking) => (
				<ReservationCard
					booking={booking}
					key={booking.id}
					onDelete={handleDeleteReservation}
				/>
			))}
		</ul>
	);
}
