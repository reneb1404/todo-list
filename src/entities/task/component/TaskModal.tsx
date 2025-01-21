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
		<dialog id="my_modal_1" className="modal modal-open">
			<div className="modal-box">
				<form
					method="dialog"
					className="flex gap-5 flex-col"
					onSubmit={handleSubmit}
				>
					<input
						type="text"
						name="title"
						value={updatedTask.title}
						onChange={handleChange}
						className="input rounded-lg w-full"
						placeholder="Title"
					/>
					<input
						type="date"
						name="date"
						value={updatedTask.date}
						className="input rounded-lg w-full"
						onChange={handleChange}
					/>
					<input
						type="text"
						name="todo"
						value={updatedTask.todo}
						onChange={handleChange}
						className="input rounded-lg w-full"
					/>
					<button
						type="submit"
						className="btn rounded-lg bg-accent text-accent-content"
					>
						Update
					</button>
					<button
						className="btn rounded-lg bg-accent text-accent-content"
						onClick={onClose}
					>
						Close
					</button>
				</form>
			</div>
		</dialog>
	);
}
