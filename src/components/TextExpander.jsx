'use client';

import { useState } from 'react';

export default function TextExpander({ children, className }) {
	const [isExpanded, setIsExpanded] = useState(false);

	if (!children) return;

	const displayText = isExpanded
		? children
		: children?.split(' ').slice(0, 40).join(' ') + '...';

	return (
		<div className={className}>
			<p className="text-lg text-primary-300">{displayText}</p>
			<button
				className="border-b border-primary-700 pb-1 leading-3 text-primary-700"
				onClick={() => setIsExpanded(!isExpanded)}>
				{isExpanded ? 'Show less' : 'Show more'}
			</button>
		</div>
	);
}
