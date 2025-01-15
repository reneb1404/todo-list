"use client";
import { Task } from "@/src/entities/task/model";
import { useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export function TaskPage() {
	const [tasks, setTask] = useState<Task[]>([]);

	const addTask = (task: Task) => {
		setTask((prevTask) => [...prevTask, task]);
	};
	return (
		<>
			<div className="text-white bg-surface-10 mt-4 w-full flex flex-col items-center">
				<h2 className="text-2xl p-4">Tasks</h2>
				<div className="task-actions flex gap-4 items-center pb-5">
					<TaskForm onAddTask={addTask} />
				</div>
			</div>
			<div className="p-8 mt-16">
				<TaskList tasks={tasks} />
			</div>
		</>
	);
}
