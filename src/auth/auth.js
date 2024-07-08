import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const authConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
			clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		authorized({ auth, request }) {
			const isLoggedIn = !!auth?.user;
			return isLoggedIn;
		},
	},
	pages: {
		signIn: '/login',
	},
};

export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth(authConfig);
