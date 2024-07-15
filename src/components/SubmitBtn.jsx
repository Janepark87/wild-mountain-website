'use client';
import { useFormStatus } from 'react-dom';
import { Spinner } from '.';

export default function SubmitBtn({
	children,
	pendingLabel = 'Updating',
	disabledOption = false,
}) {
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending || disabledOption}
			className="btn-primary py-4">
			{pending && (
				<div className="flex items-center gap-2">
					<span>{pendingLabel}...</span>
					<Spinner type="sm" />
				</div>
			)}

			{!pending && children}
		</button>
	);
}
