import { Josefin_Sans } from 'next/font/google';

const josefinFont = Josefin_Sans({
	subsets: ['latin'],
	display: 'swap',
});

const josefin = josefinFont.className;

export { josefin };
