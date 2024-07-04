'use client';

import { useState } from 'react';

export default function TextExpander({ children, classes }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const displayText = isExpanded
		? children
		: children.split(' ').slice(0, 40).join(' ') + '...';

	return (
		<div className={classes}>
			<p className="text-primary-300 text-lg">{displayText}</p>
			<button
				className="text-primary-700 border-primary-700 border-b pb-1 leading-3"
				onClick={() => setIsExpanded(!isExpanded)}>
				{isExpanded ? 'Show less' : 'Show more'}
			</button>
		</div>
	);
}
