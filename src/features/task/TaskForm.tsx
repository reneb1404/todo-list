export function TaskForm() {
	return (
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
	);
}
