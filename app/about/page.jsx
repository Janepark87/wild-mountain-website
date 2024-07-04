import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/src/constants';
import { getCabins } from '@/src/services/apiCabins';

export const revalidate = 86400; // one day

export const metadata = {
	title: 'About',
};

export default async function About() {
	const cabins = await getCabins();
	const totalCabins = cabins.length;

	return (
		<div className="flex flex-col items-center gap-12 gap-x-20 text-lg lg:grid lg:grid-cols-5 lg:gap-y-32 xl:gap-x-24">
			<div className="col-span-3">
				<h1 className="text-accent-400 xs:text-4xl mb-10 text-3xl font-medium">
					Welcome to The Wild Oasis
				</h1>

				<div className="space-y-8">
					<p>
						Where nature's beauty and comfortable living blend
						seamlessly. Hidden away in the heart of the Italian
						Dolomites, this is your paradise away from home. But
						it's not just about the luxury cabins. It's about the
						experience of reconnecting with nature and enjoying
						simple pleasures with family.
					</p>
					<p>
						Our {totalCabins} luxury cabins provide a cozy base, but
						the real freedom and peace you'll find in the
						surrounding mountains. Wander through lush forests,
						breathe in the fresh air, and watch the stars twinkle
						above from the warmth of a campfire or your hot tub.
					</p>
					<p>
						This is where memorable moments are made, surrounded by
						nature's splendor. It's a place to slow down, relax, and
						feel the joy of being together in a beautiful setting.
					</p>
				</div>
			</div>

			<div className="-order-1 col-span-2 mx-auto lg:order-none">
				<Image
					src={images.about1}
					priority
					placeholder="blur"
					className="aspect-square w-full max-w-md rounded-lg object-cover lg:max-w-full"
					alt="Family sitting around a fire pit in front of cabin"
				/>
			</div>

			<div className="xs:mt-20 col-span-2 mx-auto mt-0 lg:mt-0">
				<Image
					src={images.about2}
					priority
					placeholder="blur"
					className="aspect-square w-full max-w-md rounded-lg object-cover lg:max-w-full"
					alt="Family that manages The Wild Oasis"
				/>
			</div>

			<div className="col-span-3">
				<h2 className="text-accent-400 xs:text-4xl mb-10 text-3xl font-medium">
					Managed by our family since 1962
				</h2>

				<div className="space-y-8">
					<p>
						Since 1962, The Wild Oasis has been a cherished
						family-run retreat. Started by our grandparents, this
						haven has been nurtured with love and care, passing down
						through our family as a testament to our dedication to
						creating a warm, welcoming environment.
					</p>
					<p>
						Over the years, we've maintained the essence of The Wild
						Oasis, blending the timeless beauty of the mountains
						with the personal touch only a family business can
						offer. Here, you're not just a guest; you're part of our
						extended family. So join us at The Wild Oasis soon,
						where tradition meets tranquility, and every visit is
						like coming home.
					</p>

					<div className="flex justify-end md:justify-start">
						<Link
							href="/cabins"
							className="btn-primary xs:w-max w-full">
							Explore our luxury cabins
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
