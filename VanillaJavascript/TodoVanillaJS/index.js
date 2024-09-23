document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const addTodoButton = document.getElementById("addTodoButton");
  const todoList = document.getElementById("todoList");

  function createTaskList(task) {
    const li = document.createElement("li");
    li.textContent = task;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Del";
    removeButton.className = "removeButton";

    removeButton.onclick = () => {
      li.remove();
    };

    li.append(removeButton);
    return li;
  }

  addTodoButton.addEventListener("click", () => {
    const task = inputText.value.trim();

    if (task) {
      const taskElement = createTaskList(task);
      todoList.append(taskElement);

      inputText.value = "";
    }
  });

  inputText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodoButton.click();
    }
  });
});
