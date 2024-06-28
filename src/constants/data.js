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

export default { headerNavLinks, sideNavLinks };
