import { formatDistance, parseISO, isWithinInterval } from 'date-fns';

export const formatDistanceFromNow = (dateStr) =>
	formatDistance(parseISO(dateStr), new Date(), {
		addSuffix: true,
	}).replace('about ', '');

export const isAlreadyBooked = (range, datesArr) => {
	return (
		range.from &&
		range.to &&
		datesArr.some((date) =>
			isWithinInterval(date, { start: range.from, end: range.to })
		)
	);
};

export const formatCurrency = (value) =>
	new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'CAD',
		maximumSignificantDigits: 3,
	}).format(value);

export const getToday = (options = {}) => {
	const today = new Date();

	if (options?.end)
		today.setUTCHours(23, 59, 59, 999); // end of day
	else today.setUTCHours(0, 0, 0, 0); // start of day

	return today.toISOString();
};
