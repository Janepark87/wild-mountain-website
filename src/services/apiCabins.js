import { supabase } from './supabase';

export const getCabins = async function () {
	const { data, error } = await supabase
		.from('cabins')
		.select('id, name, maxCapacity, regularPrice, discount, image')
		.order('name');

	if (error) {
		console.error(error);
		throw new Error('Cabins could not be loaded');
	}

	return data;
};

export async function getCabin(id) {
	const { data, error } = await supabase
		.from('cabins')
		.select('*')
		.eq('id', id)
		.single();

	if (error) {
		console.error(error);
		throw new Error('Cabin could not be loaded');
	}

	return data;
}

export async function getCabinPrice(id) {
	const { data, error } = await supabase
		.from('cabins')
		.select('regularPrice, discount')
		.eq('id', id)
		.single();

	if (error) {
		console.error(error);
	}

	return data;
}
