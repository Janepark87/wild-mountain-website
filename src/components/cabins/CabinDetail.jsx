import Image from 'next/image';
import { EyeSlashIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/solid';
import { TextExpander } from '..';

export default function CabinDetail({ cabin }) {
	const { name, maxCapacity, image, description } = cabin;

	return (
		<div className="mb-24 gap-20 border border-primary-800 lg:grid lg:grid-cols-[3fr_4fr]">
			<div className="relative lg:-translate-x-3 lg:scale-[1.15]">
				<Image
					src={image}
					fill
					sizes="100%"
					className="!static max-h-[400px] w-full object-cover lg:!absolute lg:max-h-none lg:rounded-lg"
					alt={`Cabin ${name}`}
				/>
			</div>

			<div className="px-10 py-3">
				<h3 className="mb-5 rounded-lg bg-primary-950 pt-8 text-5xl font-black text-accent-100 md:text-6xl lg:w-[150%] lg:translate-x-[-254px] lg:p-6 lg:pb-1 lg:text-7xl">
					Cabin {name}
				</h3>

				<TextExpander className="mb-10">{description}</TextExpander>

				<ul className="mb-7 flex flex-col gap-4">
					<li className="flex items-center gap-3">
						<UsersIcon className="h-5 w-5 text-primary-600" />
						<span className="text-lg">
							For up to{' '}
							<span className="font-bold">{maxCapacity}</span>{' '}
							guests
						</span>
					</li>
					<li className="flex items-center gap-3">
						<MapPinIcon className="h-5 w-5 text-primary-600" />
						<span className="text-lg">
							Located in the heart of the{' '}
							<span className="font-bold">Dolomites</span> (Italy)
						</span>
					</li>
					<li className="flex items-center gap-3">
						<EyeSlashIcon className="h-5 w-5 text-primary-600" />
						<span className="text-lg">
							Privacy <span className="font-bold">100%</span>{' '}
							guaranteed
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
