import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="mt-4 space-y-8 text-center">
			<h1 className="text-3xl font-semibold">
				This page could not be found 🥲
			</h1>

			<Link href="/" className="btn-primary">
				Go back home
			</Link>
		</div>
	);
}
