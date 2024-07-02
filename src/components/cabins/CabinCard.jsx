import Link from 'next/link';
import Image from 'next/image';
import { UsersIcon } from '@heroicons/react/24/solid';

export default function CabinCard({ cabin }) {
	const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

	return (
		<div className="border-primary-800 xxs:flex-row flex flex-col overflow-hidden border">
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
					<h3 className="text-accent-500 mb-3 text-xl font-semibold lg:text-2xl">
						Cabin {name}
					</h3>

					<div className="mb-2 flex items-center gap-2">
						<UsersIcon className="text-primary-600 h-5 w-5" />
						<p className="text-primary-200 text-md lg:text-lg">
							For up to{' '}
							<span className="font-bold">{maxCapacity}</span>{' '}
							guests
						</p>
					</div>

					<p className="flex items-baseline justify-end gap-3">
						{discount > 0 ? (
							<>
								<span className="text-2xl font-[350] lg:text-3xl">
									${regularPrice - discount}
								</span>
								<span className="text-primary-600 font-semibold line-through">
									${regularPrice}
								</span>
							</>
						) : (
							<span className="text-2xl font-[350] lg:text-3xl">
								${regularPrice}
							</span>
						)}
						<span className="text-primary-200">/ night</span>
					</p>
				</div>

				<div className="bg-primary-950 border-t-primary-800 mt-auto border-t text-right">
					<Link
						href={`/cabins/${id}`}
						className="btn-primary text-primary-100 border-primary-800 hover:text-primary-900 hover:border-l-none w-full rounded-none border-l bg-transparent text-base xl:w-max">
						View this deal&rarr;
					</Link>
				</div>
			</div>
		</div>
	);
}
