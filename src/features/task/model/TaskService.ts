export class TaskService {
	private static currentId = 0;

	static createTask(title: string, date: string, todo: string) {
		return {
			id: ++this.currentId,
			title,
			date,
			todo,
		};
	}
}
