'use client';
import { useEffect, useState } from 'react';
import { Logo, Navigation } from '.';

export default function Header() {
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
			className={`border-primary-900 overflow-hidden border-b px-6 py-4 ${isSticky ? 'bg-primary-950 sticky top-0 z-50' : ''}`}>
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
				<Logo />
				<Navigation />
			</div>
		</header>
	);
}
