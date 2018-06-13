const form = document.querySelector("form");
const myTasks = document.getElementById("tasks");
const inputBox = document.getElementById("new-task-description");
// const deleteButton = document.querySelector("button");

// let counter = 0;

const addTask = (e) => {
  e.preventDefault();
  let newvar = document.createElement("LI");
  newvar.innerText = inputBox.value;
  myTasks.appendChild(newvar);
  inputBox.value = "";
};

document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
});

form.addEventListener("submit", addTask);

// const addTaskWithDeleteButton = (e) => {
//   e.preventDefault();
//
//   counter++;
//
//   let newvar = document.createElement("LI");
//   newvar.setAttribute("id", counter);
//   newvar.innerText = inputBox.value;
//
//   let deleteButton = document.createElement("button");
//   deleteButton.innerText = "Delete";
//   deleteButton.dataset.taskId = counter;
//   deleteButton.addEventListener("click", deleteTask);
//
//   myTasks.appendChild(newvar);
//   newvar.appendChild(deleteButton);
//   inputBox.value = "";
// };

// const deleteTask = () => {
//   console.log("helloooo");
// let ul = document.getElementById("tasks");
// let id = document.getElementById(counter);
// let item = document.getElementById(id.value);
// ul.removeChild(item);
// };
