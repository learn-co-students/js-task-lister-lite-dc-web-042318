class TaskList {
  constructor() {
    this.id = ++taskListId;
    store.taskLists.push(this);
  }

  tasks() {
    return store.tasks.filter(task => task.taskListId === this.id)
  }
}
