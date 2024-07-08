'use client';
import { useEffect, useState } from 'react';
import { Logo, Navigation } from '.';

export default function Header({ session }) {
	const [isSticky, setIsSticky] = useState(false);

	const checkSticky = () => {
		setIsSticky(window.scrollY > 0);
	};

	useEffect(() => {
		window.addEventListener('scroll', checkSticky);
		return () => window.removeEventListener('scroll', checkSticky);
	}, []);

	return (
		<header
			className={`overflow-hidden border-b border-primary-900 px-6 py-4 ${isSticky ? 'sticky top-0 z-50 bg-primary-950' : ''}`}>
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
				<Logo />
				<Navigation session={session} />
			</div>
		</header>
	);
}
