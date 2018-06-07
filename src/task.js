class Task {
	constructor(content, id) {
		this.id = id
		this.content = content
	}

	render() {
		let listItem = document.createElement('li')
		listItem.innerText = this.content + " "
		listItem.id = this.id
		let removeButton = document.createElement('button')
		removeButton.innerText = 'X'
		removeButton.addEventListener('click', ()=>{
			taskList.deleteTask(this.id)})
		listItem.appendChild(removeButton)
		document.querySelector("#tasks").appendChild(listItem)
	}
}
