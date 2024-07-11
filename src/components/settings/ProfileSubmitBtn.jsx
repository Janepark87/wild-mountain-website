'use client';
import { useFormStatus } from 'react-dom';

export default function ProfileSubmitBtn() {
	const { pending } = useFormStatus();

	return (
		<button disabled={pending} className="btn-primary py-4">
			{pending ? 'Updating...' : 'Update profile'}
		</button>
	);
}
