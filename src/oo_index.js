
document.addEventListener("DOMContentLoaded", () => {
  taskList = new TaskList();
  let form = document.querySelector("#create-task-form")
  form.addEventListener('submit', (e)=>{
  	e.preventDefault()
  	taskList.createTask(document.querySelector('#new-task-description').value)
  	taskList.renderAll()
  	form.querySelector('#new-task-description').value = ''
  })

});
