// import { unstable_noStore as noStore } from 'next/cache';
import { getCabins } from '@/src/services/apiCabins';
import { CabinCard } from './';

export default async function CabinList() {
	// noStore();

	const cabins = await getCabins();

	if (!cabins.length) return;

	return (
		<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
			{cabins.map((cabin) => (
				<CabinCard cabin={cabin} key={cabin.id} />
			))}
		</div>
	);
}
