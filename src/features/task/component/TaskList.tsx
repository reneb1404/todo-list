import { TaskItem } from "@/src/entities/task/component/TaskItem";
import { Task } from "@/src/entities/task/model";
import React from "react";

interface TaskListProps {
	tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
	return (
		<div>
			<div className="flex flex-wrap justify-center mt-10">
				{tasks.map((task) => (
					<TaskItem key={task.id} tasks={tasks} />
				))}
			</div>
		</div>
	);
};
