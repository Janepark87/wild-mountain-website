'use client';
import Image from 'next/image';
import { useReservation } from '@/src/context/ReservationContext';

export default function CabinReservationForm({ cabin, user }) {
	const { range, setRange, resetRange } = useReservation();
	const { maxCapacity } = cabin;

	return (
		<div>
			<div className="flex items-center justify-between bg-primary-800 px-4 py-3 text-primary-300 sm:px-16">
				<p>Logged in as</p>

				<div className="flex items-center gap-3">
					<Image
						width="30"
						height="30"
						referrerPolicy="no-referrer"
						className="rounded-full object-cover"
						src={user.image}
						alt={user.name}
					/>
					<p>{user.name}</p>
				</div>
			</div>

			<form className="flex flex-col gap-5 bg-primary-900 px-4 py-10 text-lg sm:px-16">
				<div className="space-y-2">
					<label htmlFor="numGuests">How many guests?</label>
					<select
						name="numGuests"
						id="numGuests"
						className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
						required>
						<option value="" key="">
							Select number of guests...
						</option>
						{Array.from(
							{ length: maxCapacity },
							(_, i) => i + 1
						).map((x) => (
							<option value={x} key={x}>
								{x} {x === 1 ? 'guest' : 'guests'}
							</option>
						))}
					</select>
				</div>

				<div className="space-y-2">
					<label htmlFor="observations">
						Anything we should know about your stay?
					</label>
					<textarea
						name="observations"
						id="observations"
						className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
						placeholder="Any pets, allergies, special requirements, etc.?"
					/>
				</div>

				<div className="flex flex-col items-end justify-end gap-2 sm:flex-row sm:items-center sm:gap-6">
					<p className="text-base text-primary-300">
						Start by selecting dates
					</p>

					<button className="btn-primary py-4">Reserve now</button>
				</div>
			</form>
		</div>
	);
}
