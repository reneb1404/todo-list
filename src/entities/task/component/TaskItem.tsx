import { Task } from "../model";

interface TaskItemProps {
	task: Task;
	onUpdate: (task: Task) => void;
	onDelete: (taskId: number) => void;
}

export function TaskItem({ task, onUpdate, onDelete }: TaskItemProps) {
	return (
		<div className="p-4 max-w-sm">
			<div className="flex rounded-lg h-full bg-surface-10 p-8 flex-col">
				<div className="flex items-center mb-3">
					<h2 className="text-lg font-medium">{task.title}</h2>
				</div>
				<div className="flex items-center mb-3">
					<h2 className="font-medium text-white/75">{task.date}</h2>
				</div>
				<div className="flex flex-col justify-between flex-grow">
					<p className="leading-relaxed text-base text-balance">{task.todo}</p>
				</div>
				<button
					onClick={() => onDelete(task.id)}
					className="btn border-surface-30 border-2 w-full mt-5 rounded-lg text-center"
				>
					Delete
				</button>
				<button
					onClick={() => onUpdate(task)}
					className="btn border-surface-30 border-2 w-full mt-5 rounded-lg text-center"
				>
					Edit
				</button>
			</div>
		</div>
	);
}
