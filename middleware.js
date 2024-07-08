import { auth } from './src/auth/auth';

export const middleware = auth;

export const config = {
	matcher: ['/account'],
};
