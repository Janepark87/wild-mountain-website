'use client';
import { useReservation } from '@/src/context/ReservationContext';

export default function CabinReservationForm({ cabin }) {
	const { range, setRange, resetRange } = useReservation();
	const { maxCapacity } = cabin;

	return (
		<div>
			<div className="flex items-center justify-between bg-primary-800 px-8 py-2 text-primary-300 sm:px-16">
				<p>Logged in as</p>

				{/* <div className='flex gap-4 items-center'>
                    <img
                    // Important to display google profile images
                    referrerPolicy='no-referrer'
                    className='h-8 rounded-full'
                    src={user.image}
                    alt={user.name}
                    />
                    <p>{user.name}</p>
                </div> */}
			</div>

			<form className="flex flex-col gap-5 bg-primary-900 px-8 py-10 text-lg sm:px-16">
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

				<div className="flex items-center justify-end gap-6">
					<p className="text-base text-primary-300">
						Start by selecting dates
					</p>

					<button className="btn-primary">Reserve now</button>
				</div>
			</form>
		</div>
	);
}
