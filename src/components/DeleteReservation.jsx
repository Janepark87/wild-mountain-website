import { TrashIcon } from '@heroicons/react/24/solid';

export default function DeleteReservation({ bookingId }) {
	return (
		<button className="group flex flex-grow items-center gap-1 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900">
			<TrashIcon className="h-4 w-4 text-primary-600 transition-colors group-hover:text-primary-800" />
			<span className="mt-1">Delete</span>
		</button>
	);
}
