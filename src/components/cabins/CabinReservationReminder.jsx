'use client';
import { format } from 'date-fns';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useReservation } from '@/src/context/ReservationContext';

export default function CabinReservationReminder() {
	const { range, resetRange } = useReservation();

	if (!range.from || !range.to) return null;

	return (
		<div className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-accent-500 px-4 py-3 font-semibold text-primary-800 shadow-xl shadow-slate-900">
			<p>
				👋 Don'f forget to reserve your dates <br /> from{' '}
				{format(new Date(range.from), 'MMM dd yyyy')} to{' '}
				{format(new Date(range.to), 'MMM dd yyyy')}
			</p>
			<button
				onClick={resetRange}
				className="rounded-full p-1 transition-all hover:bg-accent-600">
				<XMarkIcon className="h-5 w-5" />
			</button>
		</div>
	);
}
