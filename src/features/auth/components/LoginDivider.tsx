import GitHubLoginButton from "./GitHubLoginButton";
import GoogleLoginButton from "./GoogleLoginButton";

export function LoginDivider() {
	return (
		<div className="flex w-full flex-col">
			<div className="card bg-base-300 rounded-box grid h-20 place-items-center">
				<GitHubLoginButton />
			</div>
			<div className="divider"></div>
			<div className="card bg-base-300 rounded-box grid h-20 place-items-center">
				<GoogleLoginButton />
			</div>
		</div>
	);
}
