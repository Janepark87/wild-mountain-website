'use client';
import Image from 'next/image';
import { updateGuestProfile } from '@/src/auth/actions';
import { SubmitBtn } from '..';

export default function UpdateProfileForm({ guest, children }) {
	const { fullName, email, nationality, nationalID, countryFlag } = guest;

	return (
		<form
			action={updateGuestProfile}
			className="flex flex-col gap-6 rounded-lg bg-primary-900 px-12 py-8 text-lg">
			<div className="space-y-2">
				<label>Full name</label>
				<input
					defaultValue={fullName}
					name="fullName"
					disabled
					className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
				/>
			</div>

			<div className="space-y-2">
				<label>Email address</label>
				<input
					defaultValue={email}
					name="email"
					disabled
					className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
				/>
			</div>

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label htmlFor="nationality">Where are you from?</label>
					<Image
						src={countryFlag}
						width={30}
						height={20}
						style={{
							width: '30px',
							height: '20px',
						}}
						alt="Country flag"
						className="rounded-sm object-cover"
					/>
				</div>

				{/* SelectCountry */}
				{children}
			</div>

			<div className="space-y-2">
				<label htmlFor="nationalID">National ID number</label>
				<input
					defaultValue={nationalID}
					name="nationalID"
					className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
				/>
			</div>

			<div className="flex items-center justify-end gap-6">
				<SubmitBtn>Update profile</SubmitBtn>
			</div>
		</form>
	);
}
