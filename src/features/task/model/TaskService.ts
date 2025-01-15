export class TaskService {
	private static currentId = 0;

	static createTask(title: string, todo: string, date: string) {
		return {
			id: ++this.currentId,
			title,
			todo,
			date,
		};
	}
}
