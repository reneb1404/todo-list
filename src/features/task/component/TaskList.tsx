import { TaskItem } from "@/src/entities/task/component/TaskItem";
import { Task } from "@/src/entities/task/model";
import React from "react";

interface TaskListProps {
	tasks: Task[];
	onUpdate: (task: Task) => void;
	onDelete: (taskId: number) => void;
}

export function TaskList({ tasks, onDelete, onUpdate }: TaskListProps) {
	return (
		<div className="flex flex-wrap justify-center mt-10">
			{tasks.map((task) => (
				<TaskItem
					key={task.id}
					task={task}
					onDelete={onDelete}
					onUpdate={onUpdate}
				/>
			))}
		</div>
	);
}
