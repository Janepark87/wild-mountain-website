// import { unstable_noStore as noStore } from 'next/cache';
import { getCabins } from '@/src/services/apiCabins';
import { CabinCard } from './';

export default async function CabinList({ filter }) {
	// noStore();
	const cabins = await getCabins();

	if (!cabins.length) return;

	// filterd by capacity
	const filteredCabins = (() => {
		switch (filter) {
			case 'all':
				return cabins;
			case 'small':
				return cabins.filter((cabin) => cabin.maxCapacity <= 3);
			case 'medium':
				return cabins.filter(
					(cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
				);
			case 'large':
				return cabins.filter((cabin) => cabin.maxCapacity >= 8);
			default:
				return cabins; // default case if no filter matches
		}
	})();

	return (
		<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
			{filteredCabins.map((cabin) => (
				<CabinCard cabin={cabin} key={cabin.id} />
			))}
		</div>
	);
}
