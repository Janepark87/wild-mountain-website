'use client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { data } from '@/src/constants';

export default function CabinsFilter() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const activeFilter = searchParams.get('capacity') || 'all';

	const handleFilter = (newFilter) => {
		const params = new URLSearchParams(searchParams);
		params.set('capacity', newFilter);
		router.replace(`${pathname}?${params.toString()}`, { scroll: false });
	};

	return (
		<div className="border-primary-800 flex border">
			{data.cabinFilterList.map((filter) => (
				<button
					key={filter.name}
					onClick={() => handleFilter(filter.category)}
					className={`hover:bg-primary-700 px-5 py-2 ${filter.category === activeFilter ? 'bg-primary-700 text-primary-50' : ''}`}>
					{filter.name}
				</button>
			))}
		</div>
	);
}
