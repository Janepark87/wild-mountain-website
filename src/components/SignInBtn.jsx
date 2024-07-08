import Image from 'next/image';
import { signInAction } from '../auth/actions';

export default function SignInBtn() {
	return (
		<form action={signInAction}>
			<button className="flex items-center gap-6 rounded-lg border border-primary-300 px-10 py-4 text-lg font-medium">
				<Image
					src="https://authjs.dev/img/providers/google.svg"
					height="24"
					width="24"
					priority
					alt="Google logo"
				/>
				<span>Continue with Google</span>
			</button>
		</form>
	);
}
