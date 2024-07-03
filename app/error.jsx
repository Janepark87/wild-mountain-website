'use client';

export default function Error({ error, reset }) {
	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<h1 className="text-3xl font-semibold">Something went wrong! 🧐</h1>
			<p className="text-lg first-letter:capitalize">{error.message}</p>
			<button className="btn-primary mt-2" onClick={reset}>
				Try again
			</button>
		</div>
	);
}
