import Image from 'next/image';
import { images } from '../constants';

export default function Logo() {
	return (
		<a href="/" className="flex items-center gap-4 z-10">
			<Image src={images.logoDark} height="60" width="60" alt="Wild Mountain logo" />
			<span className="text-xl font-semibold text-primary-100">Wild Mountain</span>
		</a>
	);
}
