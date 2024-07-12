import { getBooking } from '@/src/services/apiBookings';
import { getCabin } from '@/src/services/apiCabins';
import { updateReservation } from '@/src/auth/actions';
import { SubmitBtn } from '..';

export default async function ReservationEditForm({ bookingId }) {
	const { numGuests, observations, cabinId } = await getBooking(bookingId);
	const { maxCapacity } = await getCabin(cabinId);

	return (
		<form
			action={updateReservation}
			className="flex flex-col gap-6 rounded-lg bg-primary-900 px-12 py-8 text-lg">
			<input type="hidden" name="bookingId" value={bookingId} hidden />

			<div className="space-y-2">
				<label htmlFor="numGuests">How many guests?</label>
				<select
					id="numGuests"
					name="numGuests"
					defaultValue={numGuests}
					className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
					required>
					<option value="" key="">
						Select number of guests...
					</option>
					{Array.from({ length: maxCapacity }, (_, i) => i + 1).map(
						(capacity) => (
							<option value={capacity} key={capacity}>
								{capacity} {capacity === 1 ? 'guest' : 'guests'}
							</option>
						)
					)}
				</select>
			</div>

			<div className="space-y-2">
				<label htmlFor="observations">
					Anything we should know about your stay?
				</label>
				<textarea
					name="observations"
					defaultValue={observations}
					className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
				/>
			</div>

			<div className="flex items-center justify-end gap-6">
				<SubmitBtn>Update reservation</SubmitBtn>
			</div>
		</form>
	);
}
