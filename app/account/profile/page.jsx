import { auth } from '@/src/auth/auth';
import { SelectCountry, UpdateProfileForm } from '@/src/components';
import { getGuest } from '@/src/services/apiGuests';

export const metadata = {
	title: 'Update profile',
};

export default async function page() {
	const session = await auth();
	const guest = await getGuest(session.user.email);

	return (
		<div className="mx-auto max-w-3xl">
			<h2 className="mb-4 text-2xl font-semibold text-accent-400">
				Update your guest profile
			</h2>

			<p className="mb-8 text-lg text-primary-200">
				Providing the following information will make your check-in
				process faster and smoother. See you soon!
			</p>

			<UpdateProfileForm guest={guest}>
				<SelectCountry
					id="nationality"
					name="nationality"
					defaultCountry={guest.nationality}
					className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
				/>
			</UpdateProfileForm>
		</div>
	);
}
