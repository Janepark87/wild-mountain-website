'use client';
import { useFormStatus } from 'react-dom';
import { Spinner } from '.';

export default function SubmitBtn({ children }) {
	const { pending } = useFormStatus();

	return (
		<button disabled={pending} className="btn-primary py-4">
			{pending && (
				<div className="flex items-center gap-2">
					<span>Updating...</span>
					<Spinner type="sm" />
				</div>
			)}

			{!pending && children}
		</button>
	);
}
