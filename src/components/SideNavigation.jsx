'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { data } from '../constants';
import { SignOutBtn } from './';

export default function SideNavigation() {
	const pathname = usePathname();

	return (
		<aside className="max-h-[calc(100vh_-_68px_-_6rem)] border-r border-primary-900">
			<nav className="h-full">
				<ul className="flex h-full flex-col gap-2 text-lg">
					{data.sideNavLinks.map((link) => (
						<li key={link.name}>
							<Link
								className={`flex items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100 ${pathname === link.href ? 'bg-primary-900' : ''}`}
								href={link.href}>
								{link.icon}
								<span>{link.name}</span>
							</Link>
						</li>
					))}

					<li className="mt-auto">
						<SignOutBtn />
					</li>
				</ul>
			</nav>
		</aside>
	);
}
