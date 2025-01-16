"use client";

import React, { useState } from "react";
import { Task } from "../model";

interface UpdateModalProps {
	task: Task;
	onClose: () => void;
	onUpdate: (task: Task) => void;
}
export function TaskModal({ task, onClose, onUpdate }: UpdateModalProps) {
	const [updatedTask, setUpdatedTask] = useState(task);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUpdatedTask((prevTask) => ({ ...prevTask, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onUpdate(updatedTask);
	};

	return (
		<div className="fixed inset-0 bg-surface-20 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center text-center">
			<div className="bg-surface-10 p-5 border-8 border-surface-20 w-80">
				<h2>Update Task</h2>
				<form
					onSubmit={handleSubmit}
					className="flex flex-wrap gap-4 justify-center"
				>
					<input
						type="text"
						name="title"
						value={updatedTask.title}
						onChange={handleChange}
						className="bg-surface-20 p-1 rounded-lg w-full"
						placeholder="Title"
					/>
					<input
						type="date"
						name="date"
						value={updatedTask.date}
						className="bg-surface-20 p-1 rounded-lg w-full"
						onChange={handleChange}
					/>
					<input
						type="text"
						name="todo"
						value={updatedTask.todo}
						onChange={handleChange}
						className="bg-surface-20 p-1 rounded-lg w-full"
						placeholder="ToDo..."
					/>
					<button
						type="submit"
						className="btn border-surface-30 border-2 w-24 pt-1 rounded-lg"
					>
						Update
					</button>
					<button
						type="button"
						className="btn border-surface-30 border-2 w-24 pt-1 rounded-lg"
						onClick={onClose}
					>
						Cancel
					</button>
				</form>
			</div>
		</div>
	);
}
