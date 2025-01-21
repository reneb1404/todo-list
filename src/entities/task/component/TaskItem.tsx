import { Task } from "../model";

interface TaskItemProps {
	task: Task;
	onUpdate: (task: Task) => void;
	onDelete: (taskId: number) => void;
}

export function TaskItem({ task, onUpdate, onDelete }: TaskItemProps) {
	console.log(task);

	return (
		<div className="card bg-base-100 max-w-sm card-xl roundend-md shadow-sm p-4">
			<div className="card-body">
				<h2 className="card-title">{task.title}</h2>
				<h2 className="font-medium opacity-75">{task.date}</h2>
				<p className="leading-relaxed text-base text-balance">{task.todo}</p>
			</div>
			<div className="justify-around card-actions">
				<button className="btn btn-primary" onClick={() => onDelete(task.id)}>
					Delete
				</button>
				<button className="btn btn-primary" onClick={() => onUpdate(task)}>
					Update
				</button>
			</div>
		</div>
	);
}
