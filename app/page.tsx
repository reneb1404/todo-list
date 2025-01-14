export default function Home() {
	return (
		<>
			<section className="text-white bg-surface-10 mt-4 w-full flex flex-col items-center">
				<h2 className="text-2xl p-4">Tasks</h2>
				<div className="task-actions flex gap-4 items-center pb-5">
					<form className="flex justify-center gap-2 flex-wrap w-64">
						<input
							type="text"
							id="title"
							name="title"
							className="bg-surface-20 p-1 rounded-lg w-full"
						/>
						<input
							type="date"
							id="date"
							name="date"
							className="bg-surface-20 p-1 rounded-lg w-full"
						/>
						<input
							type="text"
							name="todo"
							id="todo"
							placeholder="ToDo..."
							className="bg-surface-20 p-1 rounded-lg w-full"
						/>
						<button className="btn border-surface-30 border-2 w-24 pt-1 rounded-lg">
							Add
						</button>
					</form>
				</div>
			</section>
			<section className="p-8 mt-16">
				<div className="flex flex-wrap justify-center mt-10">
					<div className="p-4 max-w-sm">
						<div className="flex rounded-lg h-full bg-surface-10 p-8 flex-col">
							<div className="flex items-center mb-3">
								<h2 className="text-lg font-medium">Task 1</h2>
							</div>
							<div className="flex items-center mb-3">
								<h2 className="font-medium text-white/75">13.01.2025</h2>
							</div>
							<div className="flex flex-col justify-between flex-grow">
								<p className="leading-relaxed text-base text-balance">
									Neque porro quisquam est qui dolorem ipsum quia dolor sit
									amet, consectetur, adipisci velit...
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
