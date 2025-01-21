import { Task } from "@/src/entities/task/model";
import React, { useState } from "react";
import { TaskService } from "../model/TaskService";

interface TaskFormProps {
	onAddTask: (task: Task) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
	const [task, setTask] = useState<Task>({
		id: 0,
		title: "",
		date: "",
		todo: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setTask((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (task.title && task.date) {
			const newTask = TaskService.createTask(task.title, task.date, task.todo);
			onAddTask(newTask);
			setTask({ id: 0, title: "", date: "", todo: "" });
		}
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex justify-center gap-2 flex-wrap w-64 text-center"
		>
			<input
				type="text"
				name="title"
				value={task.title}
				onChange={handleInputChange}
				placeholder="Title"
				className="input rounded-lg w-full"
			/>
			<input
				type="date"
				name="date"
				value={task.date}
				onChange={handleInputChange}
				className="input rounded-lg w-full"
			/>
			<input
				type="text"
				name="todo"
				value={task.todo}
				onChange={handleInputChange}
				placeholder="ToDo..."
				className="input rounded-lg w-full"
			/>
			<button type="submit" className="btn bg-primary btn-wide rounded-lg bg-">
				Add
			</button>
		</form>
	);
}
