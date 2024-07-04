'use client';

import Link from 'next/link';
import { data } from '../constants';
import { usePathname } from 'next/navigation';

export default function Navigation() {
	const pathname = usePathname();

	return (
		<nav className="z-10 sm:text-xl">
			<ul className="flex items-center gap-4 sm:gap-8">
				{data.headerNavLinks.map((link) => (
					<li key={link.name}>
						<Link
							href={link.href}
							className={`hover:text-accent-400 transition-colors ${pathname === link.href ? 'text-accent-400' : ''}`}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
