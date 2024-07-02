import { supabase } from './supabase';

export async function getSettings() {
	const { data, error } = await supabase
		.from('settings')
		.select('*')
		.single();

	if (error) {
		console.error(error);
		throw new Error('Settings could not be loaded');
	}

	return data;
}

export async function getCountries() {
	try {
		const res = await fetch(
			'https://restcountries.com/v2/all?fields=name,flag'
		);
		const countries = await res.json();
		return countries;
	} catch {
		throw new Error('Could not fetch countries');
	}
}
