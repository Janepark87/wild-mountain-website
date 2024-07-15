import Link from 'next/link';
import Image from 'next/image';
import { UsersIcon } from '@heroicons/react/24/solid';
import { formatCurrency } from '@/src/utils/helper';

export default function CabinCard({ cabin }) {
	const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

	return (
		<div className="flex flex-col overflow-hidden border border-primary-800 xxs:flex-row">
			<Image
				src={image}
				priority
				width="180"
				height="200"
				alt={`Cabin ${name}`}
				className="h-full max-h-60 w-full min-w-28 flex-1 object-cover"
			/>

			<div className="flex flex-grow flex-col">
				<div className="bg-primary-950 px-7 pb-4 pt-5">
					<h3 className="mb-3 text-xl font-semibold text-accent-500 lg:text-2xl">
						Cabin {name}
					</h3>

					<div className="mb-2 flex items-center gap-2">
						<UsersIcon className="h-5 w-5 text-primary-600" />
						<p className="text-md text-primary-200 lg:text-lg">
							For up to{' '}
							<span className="font-bold">{maxCapacity}</span>{' '}
							guests
						</p>
					</div>

					<p className="flex items-baseline justify-end gap-3">
						{discount > 0 ? (
							<>
								<span className="text-2xl font-[350] lg:text-3xl">
									{formatCurrency(regularPrice - discount)}
								</span>
								<span className="font-semibold text-primary-600 line-through">
									{formatCurrency(regularPrice)}
								</span>
							</>
						) : (
							<span className="text-2xl font-[350] lg:text-3xl">
								{formatCurrency(regularPrice)}
							</span>
						)}
						<span className="text-primary-200">/ night</span>
					</p>
				</div>

				<div className="mt-auto border-t border-t-primary-800 bg-primary-950 text-right">
					<Link
						href={`/cabins/${id}`}
						className="btn-primary hover:border-l-none w-full rounded-none border-l border-primary-800 bg-transparent text-base text-primary-100 hover:text-primary-900 xl:w-max">
						View this deal&rarr;
					</Link>
				</div>
			</div>
		</div>
	);
}
