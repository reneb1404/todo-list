import Link from "next/link";

export default function NavBar() {
	return (
		<div className="navbar bg-base-100 shadow-sm p-6">
			<div className="flex-1">
				<Link href="/" className="btn btn-ghost text-xl">
					ToDoIt
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/">About</Link>
					</li>
					<li>
						<Link href="/">Login</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
