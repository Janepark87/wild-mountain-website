import Link from 'next/link';

export default function Navigation() {
	return (
		<nav className="z-10 sm:text-xl">
			<ul className="flex items-center gap-4 sm:gap-8">
				<li>
					<Link
						href="/cabins"
						className="hover:text-accent-400 transition-colors">
						Cabins
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="hover:text-accent-400 transition-colors">
						About
					</Link>
				</li>
				<li>
					<Link
						href="/account"
						className="hover:text-accent-400 transition-colors">
						Guest
					</Link>
				</li>
			</ul>
		</nav>
	);
}
