'use client';
import { useState } from 'react';

export default function UpdateProfileForm({ children }) {
	const [count, setCount] = useState();
	const countryFlag = 'pt.jpg';

	return (
		<form className="flex flex-col gap-6 rounded-lg bg-primary-900 px-12 py-8 text-lg">
			<div className="space-y-2">
				<label>Full name</label>
				<input
					disabled
					className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
				/>
			</div>

			<div className="space-y-2">
				<label>Email address</label>
				<input
					disabled
					className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
				/>
			</div>

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label htmlFor="nationality">Where are you from?</label>
					<img
						src={countryFlag}
						alt="Country flag"
						className="h-5 rounded-sm"
					/>
				</div>

				{/* SelectCountry */}
				{children}
			</div>

			<div className="space-y-2">
				<label htmlFor="nationalID">National ID number</label>
				<input
					name="nationalID"
					className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
				/>
			</div>

			<div className="flex items-center justify-end gap-6">
				<button className="btn-primary">Update profile</button>
			</div>
		</form>
	);
}
