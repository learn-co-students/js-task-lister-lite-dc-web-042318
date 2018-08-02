class Task {
  constructor(content, taskList) {
    this.content = content;
    this.id = ++taskId;
    this.taskListId = taskList.id;
    store.tasks.push(this);
  }
}
