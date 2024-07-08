import { auth } from '@/src/auth/auth';

export const metadata = {
	title: 'Guest',
};

export default async function Account() {
	const sesstion = await auth();
	const firstName = sesstion.user.name.split(' ').at(0);

	return (
		<div>
			<h2 className="mb-7 text-2xl font-semibold text-accent-400">
				Welcome, {firstName}
			</h2>
		</div>
	);
}
