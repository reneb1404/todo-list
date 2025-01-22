import { signIn } from "../config/auth";

export default function GoogleLoginButton() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google");
			}}
		>
			<button
				type="submit"
				className="btn btn-secondary text-secondary-content btn-md"
			>
				Sign in with Google
			</button>
		</form>
	);
}
