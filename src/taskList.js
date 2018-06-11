class TaskList {
  constructor() {
    this.all = [];
  }

  add(task) {
    this.all.push(task);
  }

  delete(task) {
    let index = this.all.indexOf(task);
    this.all.splice(index, 1);
  }
}
