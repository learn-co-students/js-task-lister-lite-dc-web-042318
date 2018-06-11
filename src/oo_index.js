document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const taskForm = document.querySelector("#create-task-form");
  const tasksContainer = document.querySelector("#tasks");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    submitTask();
  });

  function refreshTasks() {
    let activeTasks = document.querySelectorAll(".task-item");
    activeTasks.forEach(task => task.remove());
    taskList.all.forEach(task => createTaskItem(task));
  }

  function createTaskItem(task) {
    tasksContainer.appendChild(task.listItem());
    let button = document.querySelector(`[data-description='${task.text}']`);
    button.addEventListener("click", function(event) {
      taskList.delete(task);
      refreshTasks();
    });
  }

  function submitTask() {
    let taskDescription = document.querySelector("#new-task-description");
    let task = new Task(taskDescription.value);
    taskList.add(task);
    taskDescription.value = "";
    refreshTasks();
    console.log(taskList.all);
  }
});
