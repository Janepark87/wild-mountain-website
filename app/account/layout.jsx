import { SideNavigation } from '@/src/components';

export default function AccountLayout({ children }) {
	return (
		<div className="grid h-full grid-cols-[16rem_1fr] gap-12">
			<SideNavigation />

			<div className="py-1">{children}</div>
		</div>
	);
}
