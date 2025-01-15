import { Task } from "../model";

export function TaskItem({ tasks }: { tasks: Task[] }) {
	return (
		<>
			{tasks.map((task) => (
				<div key={task.id}>
					<div className="p-4 max-w-sm">
						<div className="flex rounded-lg h-full bg-surface-10 p-8 flex-col">
							<div className="flex items-center mb-3">
								<h2 className="text-lg font-medium">{task.title}</h2>
							</div>
							<div className="flex items-center mb-3">
								<h2 className="font-medium text-white/75">{task.date}</h2>
							</div>
							<div className="flex flex-col justify-between flex-grow">
								<p className="leading-relaxed text-base text-balance">
									{task.todo}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
