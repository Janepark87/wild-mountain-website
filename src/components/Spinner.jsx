export default function Spinner({ type }) {
	const spinnerClass = type === 'sm' ? 'spinner-mini' : 'spinner';
	return <div className={spinnerClass}></div>;
}
