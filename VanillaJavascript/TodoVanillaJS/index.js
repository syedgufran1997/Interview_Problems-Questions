document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const addTodoButton = document.getElementById("addTodoButton");
  const todoList = document.getElementById("todoList");

  function createTaskList() {}

  addTodoButton.addEventListener("click", () => {
    const task = inputText.value.trim();

    if (task) {
      console.log("input text =>", task);
    }
  });

  inputText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodoButton.click();
    }
  });
});
