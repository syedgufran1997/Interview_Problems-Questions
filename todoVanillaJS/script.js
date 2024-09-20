document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTodo");
  const taskList = document.getElementById("taskList");

  function creatTaskElement(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove";
    removeButton.onclick = () => {
      li.remove();
    };

    li.appendChild(removeButton);
    return li;
  }

  addTaskButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    if (task) {
      const taskElement = creatTaskElement(task);
      taskList.appendChild(taskElement);
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTaskButton.click();
    }
  });
});
