import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/src/constants';

export default function App() {
	return (
		<div className="mt-24">
			<Image
				src={images.homeBg}
				priority
				placeholder="blur"
				quality={80}
				className="full-screen object-cover object-top"
				alt="Mountains and forests with two cabins"
			/>

			<div className="relative z-10 text-center">
				<h1 className="text-primary-50 mb-10 text-5xl font-normal tracking-tight sm:text-6xl lg:text-8xl">
					Welcome to paradise.
				</h1>
				<Link href="/cabins" className="btn-primary">
					Explore luxury cabins
				</Link>
			</div>
		</div>
	);
}
