import Image from 'next/image';

export default function UserAvatar({ session }) {
	return (
		<Image
			src={session.user.image}
			alt={session.user.name}
			referrerPolicy="no-referrer"
			width={30}
			height={30}
			className="!h-7 !w-7 rounded-full object-cover xs:!h-8 xs:!w-8"
		/>
	);
}
