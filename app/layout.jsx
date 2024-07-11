import { auth } from '@/src/auth/auth';
import { Header } from '@/src/components';
import { ReservationProvider } from '@/src/context/ReservationContext';
import { josefin } from '@/src/styles/fonts';
import '@/src/styles/globals.css';

export const metadata = {
	title: {
		template: 'Wild Mountain | %s',
		default: 'Welcome to Wild Mountain',
	},
	description:
		"Discover Wild Mountain, a luxurious boutique cabin hotel nestled in the heart of Canada's stunning landscapes. Perfect for a serene getaway, our hotel offers breathtaking views, cozy accommodations, and a unique experience surrounded by beautiful mountains and lush forests.",
};

export default async function RootLayout({ children }) {
	const session = await auth();

	return (
		<html suppressHydrationWarning lang="en">
			<body
				className={`${josefin} relative flex min-h-screen flex-col bg-primary-950 text-primary-100 antialiased`}>
				<Header session={session} />

				<main className="grid flex-1 overflow-x-hidden px-6 py-12">
					<div className="mx-auto w-full max-w-7xl">
						<ReservationProvider>{children}</ReservationProvider>
					</div>
				</main>
			</body>
		</html>
	);
}
