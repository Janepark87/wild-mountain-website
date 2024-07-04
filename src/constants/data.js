import {
	CalendarDaysIcon,
	HomeIcon,
	UserIcon,
} from '@heroicons/react/24/solid';

const headerNavLinks = [
	{
		name: 'Cabins',
		href: '/cabins',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Guest',
		href: '/account',
	},
];

const sideNavLinks = [
	{
		name: 'Home',
		href: '/account',
		icon: <HomeIcon className="text-primary-600 h-5 w-5" />,
	},
	{
		name: 'Reservations',
		href: '/account/reservations',
		icon: <CalendarDaysIcon className="text-primary-600 h-5 w-5" />,
	},
	{
		name: 'Guest profile',
		href: '/account/profile',
		icon: <UserIcon className="text-primary-600 h-5 w-5" />,
	},
];

const cabinFilterList = [
	{
		name: 'All cabins',
		category: 'all',
	},
	{
		name: '1-3 guests',
		category: 'small',
	},
	{
		name: '4-7 guests',
		category: 'medium',
	},
	{
		name: '8-12 guests',
		category: 'large',
	},
];

export default { headerNavLinks, sideNavLinks, cabinFilterList };
