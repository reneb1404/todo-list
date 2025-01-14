import Link from "next/link";

export default function NavBar() {
	return (
		<div className="navbar p-6 bg-surface-10">
			<ul className="flex gap-5 items-center">
				<li className="flex-1 font-semibold text-2xl">
					<Link href="/">ToDo&apos;s</Link>
				</li>
				<li>
					<Link href="/">About</Link>
				</li>
				<li>
					<Link href="/">Login</Link>
				</li>
			</ul>
		</div>
	);
}
