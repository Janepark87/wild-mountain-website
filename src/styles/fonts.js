import { Josefin_Sans } from 'next/font/google';

const josefinFont = Josefin_Sans({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

const josefin = josefinFont.className;

export { josefin };
