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
		<div className="mx-auto mt-8 max-w-6xl">
			<div>
				<CabinDetail cabin={cabin} />

				<h2 className="mb-10 text-center text-5xl font-semibold text-accent-400">
					Reserve {cabin.name} today. Pay on arrival.
				</h2>

				<Suspense fallback={<Spinner />}>
					<CabinReservation cabin={cabin} />
				</Suspense>
			</div>
		</div>
	);
}
