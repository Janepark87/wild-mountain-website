export default function SignInBtn() {
	return (
		<button className="border-primary-300 flex items-center gap-6 border px-10 py-4 text-lg font-medium">
			<Image
				src="https://authjs.dev/img/providers/google.svg"
				height="24"
				width="24"
				priority
				alt="Google logo"
			/>
			<span>Continue with Google</span>
		</button>
	);
}
