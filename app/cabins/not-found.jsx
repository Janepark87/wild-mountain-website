import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="mt-4 space-y-8 text-center">
			<h1 className="text-3xl font-semibold">
				This cabin could not be found 🛖
			</h1>

			<Link href="/cabins" className="btn-primary">
				Back To all cabins
			</Link>
		</div>
	);
}
