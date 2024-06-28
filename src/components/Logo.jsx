import Link from 'next/link';
import Image from 'next/image';
import { images } from '../constants';

export default function Logo() {
	return (
		<Link href="/" className="flex h-16 w-16 flex-col items-center gap-1">
			<Image
				src={images.logoLight}
				quality={100}
				priority
				className="w-full object-cover"
				alt="Wild Mountain logo"
			/>
			<span className="text-primary-100 text-xs uppercase">
				Wild Mountain
			</span>
		</Link>
	);
}
