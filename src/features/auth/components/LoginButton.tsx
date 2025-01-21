import { signIn } from "../config/auth";

export default function GitHubLoginButton() {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("github");
			}}
		>
			<button
				type="submit"
				className="btn btn-secondary text-secondary-content btn-md"
			>
				Sign in with GitHub
			</button>
		</form>
	);
}
