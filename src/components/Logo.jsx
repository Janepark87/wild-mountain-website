import Link from 'next/link';
import Image from 'next/image';
import { images } from '../constants';

export default function Logo() {
	return (
		<Link href="/" className="z-10">
			<div className="hidden items-center gap-2 sm:flex">
				<Image
					src={images.logoLight}
					quality={100}
					className="mb-[0.2rem] w-12"
					alt="Wild Mountain logo"
				/>
				<span className="whitespace-nowrap !leading-none text-white sm:text-xl">
					Wile Mountain
				</span>
			</div>
			<Image
				src={images.logoLightMobile}
				quality={100}
				priority
				className="w-12 min-w-10 object-cover sm:hidden"
				alt="Wild Mountain logo"
			/>
		</Link>
	);
}
