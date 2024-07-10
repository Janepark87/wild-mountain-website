import { getCountries } from '@/src/services/apiSettings';

export default async function SelectCountry({
	id,
	name,
	defaultCountry,
	className,
}) {
	const countries = await getCountries();
	const flag =
		countries.find((country) => country.name === defaultCountry)?.flag ??
		'';

	return (
		<select
			id={id}
			name={name}
			// Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
			defaultValue={`${defaultCountry}%${flag}`}
			className={className}>
			<option value="">Select country...</option>
			{countries.map((country) => (
				<option
					key={country.name}
					value={`${country.name}%${country.flag}`}>
					{country.name}
				</option>
			))}
		</select>
	);
}
