import { Logo, Navigation } from '.';

export default function Header() {
	return (
		<header className="border-primary-900 border-b px-6 py-5">
			<div className="mx-auto flex max-w-7xl items-center justify-between">
				<Logo />
				<Navigation />
			</div>
		</header>
	);
}
