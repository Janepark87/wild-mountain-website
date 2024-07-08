'use client';

import Link from 'next/link';
import { data } from '../constants';
import { usePathname } from 'next/navigation';
import { UserAvatar } from '.';

export default function Navigation({ session }) {
	const pathname = usePathname();

	return (
		<nav className="z-10 sm:text-xl">
			<ul className="flex items-center gap-4 sm:gap-8">
				{data.headerNavLinks.map((link) => {
					const guest = session?.user?.image && link.name == 'Guest';
					return (
						<li key={link.name}>
							<Link
								href={link.href}
								className={`transition-colors hover:text-accent-400 ${pathname === link.href ? 'text-accent-400' : ''} ${guest ? 'flex items-center gap-2 sm:gap-3' : ''}`}>
								{guest && <UserAvatar session={session} />}
								{link.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
