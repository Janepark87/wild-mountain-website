import { Header } from '@/components';

export const metadata = {
	title: 'Wild Mountain',
	description: 'Wild Mountain. Welcome to paradise.',
};

export default function RootLayout({ children }) {
	return (
		<html suppressHydrationWarning lang="en">
			<body>
				<Header />

				<main>{children}</main>

				<footer>Copyright by Wild Mountain.</footer>
			</body>
		</html>
	);
}
