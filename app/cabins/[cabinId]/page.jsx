import { Suspense } from 'react';
import { getCabin, getCabins } from '@/src/services/apiCabins';
import { CabinDetail, CabinReservation, Spinner } from '@/src/components';

export async function generateMetadata({ params }) {
	const { name } = await getCabin(params.cabinId);
	return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
	const cabins = await getCabins();
	const cabinIds = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
	return cabinIds;
}

export default async function Cabin({ params }) {
	const cabin = await getCabin(params.cabinId);

	return (
		<div className="mx-auto max-w-6xl lg:mt-8">
			<CabinDetail cabin={cabin} />

			<h2 className="mb-10 flex flex-col gap-1 text-center text-3xl font-semibold text-accent-400 sm:block sm:text-5xl">
				<span>Reserve {cabin.name} today.</span>
				<span className="sm:ml-3">Pay on arrival.</span>
			</h2>

			<Suspense fallback={<Spinner />}>
				<CabinReservation cabin={cabin} />
			</Suspense>
		</div>
	);
}
