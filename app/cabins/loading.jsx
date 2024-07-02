import { Spinner } from '@/src/components';

export default function Loading() {
	return (
		<div className="grid items-center justify-center">
			<Spinner />
			<p className="text-primary-200 text-xl">Loding cabin data...</p>
		</div>
	);
}
