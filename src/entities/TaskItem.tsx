export function TaskItem({
	title,
	date,
	todo,
}: {
	title: string;
	date: string;
	todo: string;
}) {
	return (
		<div className="p-4 max-w-sm">
			<div className="flex rounded-lg h-full bg-surface-10 p-8 flex-col">
				<div className="flex items-center mb-3">
					<h2 className="text-lg font-medium">{title}</h2>
				</div>
				<div className="flex items-center mb-3">
					<h2 className="font-medium text-white/75">{date}</h2>
				</div>
				<div className="flex flex-col justify-between flex-grow">
					<p className="leading-relaxed text-base text-balance">{todo}</p>
				</div>
			</div>
		</div>
	);
}
