'use client';
import { useTransition } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteReservation } from '@/src/auth/actions';
import { Spinner } from '..';

export default function DeleteReservation({ bookingId }) {
	const [isPending, startTransaction] = useTransition();

	const handleDeleteReservation = () => {
		if (confirm('Are you sure you want to delete this reservation?'))
			startTransaction(() => {
				deleteReservation(bookingId);
			});
	};

	return (
		<button
			onClick={handleDeleteReservation}
			className="group flex flex-grow items-center gap-1 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900">
			{!isPending ? (
				<>
					<TrashIcon className="h-4 w-4 text-primary-600 transition-colors group-hover:text-primary-800" />
					<span className="mt-1">Delete</span>
				</>
			) : (
				<div className="mx-auto">
					<Spinner type="sm" />
				</div>
			)}
		</button>
	);
}
