import Link from 'next/link';
import { data } from '../constants';

export default function Navigation() {
	return (
		<nav className="z-10 sm:text-xl">
			<ul className="flex items-center gap-4 sm:gap-8">
				{data.headerNavLinks.map((link) => (
					<li key={link.name}>
						<Link
							href={link.href}
							className="hover:text-accent-400 transition-colors">
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
