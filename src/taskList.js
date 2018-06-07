class TaskList {
	constructor(tasks) {
		this.tasks = []
		this.id = 0
	}

	createTask(content) {
		let task = new Task(content, this.id)
		this.tasks.push(task)
		this.id += 1
	}

	deleteTask(id) {
		this.tasks = this.tasks.filter((task) => task.id !== id)
		this.renderAll()
	}

	renderAll() {
		document.querySelector("#tasks").innerHTML = ''
		this.tasks.forEach((task) => {task.render()})
	}

}
