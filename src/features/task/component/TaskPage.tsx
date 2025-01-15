"use client";

import { TaskItem } from "@/src/entities/task/component/TaskItem";
import { Task } from "@/src/entities/task/model";
import React, { useState } from "react";
let currentId = 0;
export function TaskPage() {
	const [tasks, setTask] = useState<Task[]>([]);

	const [newTask, setNewTask] = useState<Task>({
		id: 0,
		title: "",
		todo: "",
		date: "",
	});

	const addTask = (e: React.FormEvent) => {
		e.preventDefault();
		if (newTask.title && newTask.date) {
			setTask((prevTask) => [...prevTask, newTask]);
			setNewTask({ id: currentId, title: "", todo: "", date: "" });
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setNewTask((prevTask) => ({ ...prevTask, id: ++currentId, [name]: value }));
	};

	return (
		<>
			<section className="text-white bg-surface-10 mt-4 w-full flex flex-col items-center">
				<h2 className="text-2xl p-4">Tasks</h2>
				<div className="task-actions flex gap-4 items-center pb-5">
					<form
						onSubmit={addTask}
						className="flex justify-center gap-2 flex-wrap w-64"
					>
						<input
							type="text"
							name="title"
							value={newTask.title}
							onChange={handleInputChange}
							className="bg-surface-20 p-1 rounded-lg w-full"
						/>
						<input
							type="date"
							name="date"
							value={newTask.date}
							onChange={handleInputChange}
							className="bg-surface-20 p-1 rounded-lg w-full"
						/>
						<input
							type="text"
							name="todo"
							value={newTask.todo}
							onChange={handleInputChange}
							placeholder="ToDo..."
							className="bg-surface-20 p-1 rounded-lg w-full"
						/>
						<button
							type="submit"
							className="btn border-surface-30 border-2 w-24 pt-1 rounded-lg"
						>
							Add
						</button>
					</form>
				</div>
			</section>
			<section className="p-8 mt-16">
				<div className="flex flex-wrap justify-center mt-10">
					<TaskItem tasks={tasks} />
				</div>
			</section>
		</>
	);
}
