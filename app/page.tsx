import { TaskItem } from "@/src/entities/TaskItem";
import { TaskForm } from "@/src/features/task/TaskForm";

export default function Home() {
	const testTaskData = [
		{
			title: "Task 1",
			date: "15.01.2025",
			todo: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
		},
		{
			title: "Task 2",
			date: "15.01.2025",
			todo: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
		},
		{
			title: "Task 3",
			date: "15.01.2025",
			todo: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
		},
		{
			title: "Task 4",
			date: "15.02.2025",
			todo: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
		},
	];

	return (
		<>
			<section className="text-white bg-surface-10 mt-4 w-full flex flex-col items-center">
				<h2 className="text-2xl p-4">Tasks</h2>
				<TaskForm />
			</section>
			<section className="p-8 mt-16">
				<div className="flex flex-wrap justify-center mt-10">
					{testTaskData.map((task) => (
						<TaskItem
							key={task.title}
							title={task.title}
							date={task.date}
							todo={task.todo}
						/>
					))}
				</div>
			</section>
		</>
	);
}
