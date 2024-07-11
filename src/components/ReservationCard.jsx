import Image from 'next/image';
import { format, isPast, isToday } from 'date-fns';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { formatDistanceFromNow } from '../utils/helper';
import { DeleteReservation } from '.';
import Link from 'next/link';

export default function ReservationCard({ booking }) {
	const {
		id,
		guestId,
		startDate,
		endDate,
		numNights,
		totalPrice,
		numGuests,
		status,
		created_at,
		cabins: { name, image },
	} = booking;

	return (
		<div className="flex overflow-hidden rounded-md border border-primary-800">
			<div className="relative aspect-square h-32">
				<Image
					src={image}
					fill
					sizes="100%"
					alt={`Cabin ${name}`}
					className="border-r border-primary-800 object-cover"
				/>
			</div>

			<div className="flex flex-grow flex-col px-6 py-3">
				<div className="flex items-center justify-between">
					<h3 className="text-xl font-semibold">
						{numNights} nights in Cabin {name}
					</h3>
					{isPast(new Date(startDate)) ? (
						<span className="flex items-center rounded-sm bg-yellow-800 p-2 text-xs font-bold uppercase leading-none text-yellow-200">
							past
						</span>
					) : (
						<span className="flex items-center rounded-sm bg-green-800 p-2 text-xs font-bold uppercase leading-none text-green-200">
							upcoming
						</span>
					)}
				</div>

				<p className="text-lg text-primary-300">
					{format(new Date(startDate), 'EEE, MMM dd yyyy')} (
					{isToday(new Date(startDate))
						? 'Today'
						: formatDistanceFromNow(startDate)}
					) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
				</p>

				<div className="mt-auto flex items-baseline gap-5">
					<p className="text-xl font-semibold text-accent-400">
						${totalPrice}
					</p>
					<p className="text-primary-300">&bull;</p>
					<p className="text-lg text-primary-300">
						{numGuests} guest{numGuests > 1 && 's'}
					</p>
					<p className="ml-auto text-sm text-primary-400">
						Booked{' '}
						{format(new Date(created_at), 'EEE, MMM dd yyyy, p')}
					</p>
				</div>
			</div>

			<div className="flex w-[100px] flex-col border-l border-primary-800">
				{!isPast(startDate) && (
					<>
						<Link
							href={`/account/reservations/edit/${id}`}
							className="group flex flex-grow items-center gap-1 border-b border-primary-800 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900">
							<PencilSquareIcon className="h-4 w-4 text-primary-600 transition-colors group-hover:text-primary-800" />
							<span className="mt-1">Edit</span>
						</Link>
						<DeleteReservation bookingId={id} />
					</>
				)}
			</div>
		</div>
	);
}
