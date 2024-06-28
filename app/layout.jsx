import { Header } from '@/src/components';
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

export default function RootLayout({ children }) {
	return (
		<html suppressHydrationWarning lang="en">
			<body
				className={`${josefin} text-primary-100 bg-primary-950 min-h-screen`}>
				<Header />

				<main>{children}</main>

				<footer>Copyright by Wild Mountain.</footer>
			</body>
		</html>
	);
}
