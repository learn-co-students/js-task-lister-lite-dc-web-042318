let taskId = 0;
let taskListId = 0;

const store = { taskLists: [], tasks: [] };

function findSubmitButton() {
  return document.querySelector('#create-task-form > input[type="submit"]:nth-child(3)');
}

function findTaskDiv() {
  return document.getElementById('tasks');
}

function taskContentBox() {
  return document.getElementById('new-task-description');
}

function createTaskList() {
  return new TaskList();
}

function refresh() {
  findTaskDiv().innerHTML = ''
  store.tasks.forEach(task =>
    findTaskDiv().innerHTML += `<li>${task.content} <button data-id=${task.id}>x</button></li>`);
  deleteTask();
}

function deleteTask() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonTask = store.tasks.find(task => button.dataset.id == task.id);
      store.tasks.splice(store.tasks.indexOf(buttonTask), 1);
      refresh();
    });
  });
}

function addTask(list) {
  findSubmitButton().addEventListener('click', (e) => {
    e.preventDefault();
    new Task(taskContentBox().value, list);
    taskContentBox().value = ''
    refresh();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  addTask(createTaskList());
});
