'use client';
import { isWithinInterval } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useReservation } from '../context/ReservationContext';

function isAlreadyBooked(range, datesArr) {
	return (
		range.from &&
		range.to &&
		datesArr.some((date) =>
			isWithinInterval(date, { start: range.from, end: range.to })
		)
	);
}

export default function DateSelector({ cabin, settings, bookedDates }) {
	const { range, setRange, resetRange } = useReservation();

	// CHANGE
	const regularPrice = 23;
	const discount = 23;
	const numNights = 23;
	const cabinPrice = 23;

	// SETTINGS
	const { minBookingLength, maxBookingLength } = settings;

	return (
		<div className="flex flex-col justify-between border border-primary-800 lg:border-r-0">
			<DayPicker
				className="flex w-full justify-center place-self-center px-4 py-12"
				mode="range"
				onSelect={setRange}
				selected={range}
				min={minBookingLength + 1}
				max={maxBookingLength}
				fromMonth={new Date()}
				fromDate={new Date()}
				toYear={new Date().getFullYear() + 5}
				captionLayout="dropdown"
				numberOfMonths={2}
			/>

			<div className="flex h-[72px] items-center justify-between bg-accent-500 px-4 text-primary-800 sm:px-16 lg:px-8">
				<div className="flex items-baseline gap-3 sm:gap-6">
					<p className="flex items-center gap-2">
						{discount > 0 ? (
							<>
								<span className="text-lg sm:text-2xl">
									${regularPrice - discount}
								</span>
								<span className="font-semibold text-primary-700 line-through">
									${regularPrice}
								</span>
							</>
						) : (
							<span className="text-lg sm:text-2xl">
								${regularPrice}
							</span>
						)}
						<span>/night</span>
					</p>
					{numNights ? (
						<>
							<p className="rounded-md bg-accent-600 p-2 py-3 text-lg leading-none sm:text-2xl">
								&times; {numNights}
							</p>
							<p>
								<span className="text-md font-bold uppercase sm:text-lg">
									Total
								</span>{' '}
								<span className="text-lg font-semibold lg:text-2xl">
									${cabinPrice}
								</span>
							</p>
						</>
					) : null}
				</div>

				{range.from || range.to ? (
					<button
						className="border border-primary-800 px-4 py-2 text-sm font-semibold"
						onClick={resetRange}>
						Clear
					</button>
				) : null}
			</div>
		</div>
	);
}