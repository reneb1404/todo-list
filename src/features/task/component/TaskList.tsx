import { TaskItem } from "@/src/entities/task/component/TaskItem";
import { Task } from "@/src/entities/task/model";
import React from "react";

interface TaskListProps {
	tasks: Task[];
	onDelete: (taskId: number) => void;
}

export function TaskList({ tasks, onDelete }: TaskListProps) {
	return (
		<div className="flex flex-wrap justify-center mt-10">
			{tasks.map((task) => (
				<TaskItem key={task.id} task={task} onDelete={onDelete} />
			))}
		</div>
	);
}
