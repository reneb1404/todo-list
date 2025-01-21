"use client";
import { TaskModal } from "@/src/entities/task/component/TaskModal";
import { Task } from "@/src/entities/task/model";
import {
	loadFromLocalStorage,
	saveToLocalStorage,
} from "@/src/shared/lib/localStorage";
import { useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

const LOCAL_STORAGE_KEY = "tasks";

export function TaskPage() {
	const [tasks, setTask] = useState<Task[]>([]);
	const [selectedTask, setSelectedTask] = useState<Task | null>(null);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	useEffect(() => {
		const savedTask = loadFromLocalStorage<Task[]>(LOCAL_STORAGE_KEY);
		if (savedTask) {
			setTask(savedTask);
		}
	}, []);

	useEffect(() => {
		saveToLocalStorage<Task[]>(LOCAL_STORAGE_KEY, tasks);
	}, [tasks]);

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
			<div className="mt-4 w-full flex flex-col items-center">
				<h2 className="text-2xl p-4">Tasks</h2>
				<div className="flex gap-4 items-center pb-5">
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
