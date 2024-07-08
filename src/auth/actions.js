'use server';
import { signIn, signOut } from './auth';

export async function signInAction() {
	const PROVIDER = 'google';
	await signIn(PROVIDER, {
		redirectTo: '/account',
	});
}

export async function signOutAction() {
	await signOut({ redirectTo: '/' });
}
