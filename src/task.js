class Task {
  constructor(text) {
    this.text = text;
  }

  listItem() {
    let li = document.createElement("li");
    li.innerText = this.text;
    li.setAttribute("class", "task-item");
    let button = document.createElement("button");
    button.setAttribute("data-description", this.text);
    button.innerText = "x";
    li.appendChild(button);
    return li;
  }
}
