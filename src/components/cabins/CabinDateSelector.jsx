'use client';
import 'react-day-picker/dist/style.css';
import { differenceInDays, isPast, isSameDay } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useReservation } from '../../context/ReservationContext';
import { formatCurrency, isAlreadyBooked } from '../../utils/helper';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function CabinDateSelector({ cabin, settings, bookedDates }) {
	const { range, setRange, resetRange } = useReservation();

	const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

	const { regularPrice, discount } = cabin;
	const numNights = differenceInDays(displayRange.to, displayRange.from);
	const cabinPrice = numNights * (regularPrice - discount);

	// SETTINGS
	const { minBookingLength, maxBookingLength } = settings;

	return (
		<div className="flex flex-col justify-between border border-primary-800 lg:border-r-0">
			<DayPicker
				className="flex w-full justify-center place-self-center px-4 py-12"
				mode="range"
				onSelect={setRange}
				selected={displayRange}
				min={minBookingLength + 1}
				max={maxBookingLength}
				fromMonth={new Date()}
				fromDate={new Date()}
				toYear={new Date().getFullYear() + 5}
				captionLayout="dropdown"
				numberOfMonths={2}
				disabled={(curDate) =>
					isPast(curDate) ||
					bookedDates.some((data) => isSameDay(data, curDate))
				}
			/>

			<div className="flex flex-col items-end justify-between gap-2 bg-accent-500 p-4 text-primary-800 xs:flex-row xs:items-center xs:gap-3 sm:px-16 lg:px-8">
				<div className="flex items-center gap-1">
					{discount > 0 ? (
						<>
							<span className="xs:text-lg">
								{formatCurrency(regularPrice - discount)}
							</span>
							<span className="ml-1 font-semibold text-primary-700 line-through">
								{formatCurrency(regularPrice)}
							</span>
						</>
					) : (
						<span className="xs:text-lg">
							{formatCurrency(regularPrice)}
						</span>
					)}
					<span>/night</span>

					{numNights > 0 ? (
						<span className="ml-2 flex items-center gap-1 rounded-md bg-accent-600 p-2 leading-none">
							<XMarkIcon className="w-3" />
							<span>{numNights}</span>
						</span>
					) : null}
				</div>

				<div className="flex items-center justify-between gap-4">
					{numNights > 0 ? (
						<div className="flex items-center gap-1">
							<span className="text-xs font-semibold uppercase xs:text-sm">
								Total
							</span>
							<span className="font-semibold">
								{formatCurrency(cabinPrice)}
							</span>
						</div>
					) : null}

					{range.from || range.to ? (
						<button
							className="rounded-md border border-primary-800 px-2 py-1 text-sm font-semibold xs:px-3 xs:py-2"
							onClick={resetRange}>
							Clear
						</button>
					) : null}
				</div>
			</div>
		</div>
	);
}
