// Guests are uniquely identified by their email address
export async function getGuest(email) {
	const { data, error } = await supabase.from('guests').select('*').eq('email', email).single();

	// No error here! We handle the possibility of no guest in the sign in callback
	return data;
}

export async function createGuest(newGuest) {
	const { data, error } = await supabase.from('guests').insert([newGuest]);

	if (error) {
		console.error(error);
		throw new Error('Guest could not be created');
	}

	return data;
}

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(id, updatedFields) {
	const { data, error } = await supabase.from('guests').update(updatedFields).eq('id', id).select().single();

	if (error) {
		console.error(error);
		throw new Error('Guest could not be updated');
	}
	return data;
}
