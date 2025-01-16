"use client";
import { TaskModal } from "@/src/entities/task/component/TaskModal";
import { Task } from "@/src/entities/task/model";
import { useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export function TaskPage() {
	const [tasks, setTask] = useState<Task[]>([]);
	const [selectedTask, setSelectedTask] = useState<Task | null>(null);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const addTask = (task: Task) => {
		setTask((prevTask) => [...prevTask, task]);
	};

	const deleteTask = (taskId: number) => {
		setTask((prevTask) => prevTask.filter((task) => task.id !== taskId));
	};

	const updateTask = (updatedTask: Task) => {
		setTask((prevTask) =>
			prevTask.map((task) => (task.id === updatedTask.id ? updatedTask : task))
		);
		closeUpdateTask();
	};

	const openUpdateTask = (task: Task) => {
		setSelectedTask(task);
		setIsModalOpen(true);
	};

	const closeUpdateTask = () => {
		setSelectedTask(null);
		setIsModalOpen(false);
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
				<TaskList
					tasks={tasks}
					onDelete={deleteTask}
					onUpdate={openUpdateTask}
				/>
			</div>
			{isModalOpen && selectedTask && (
				<TaskModal
					task={selectedTask}
					onClose={closeUpdateTask}
					onUpdate={updateTask}
				/>
			)}
		</>
	);
}
