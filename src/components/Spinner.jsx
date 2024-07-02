export default function Spinner({ type }) {
	return <div className={`spinner${type === 'sm' ? '-mini' : ''}`}></div>;
}
