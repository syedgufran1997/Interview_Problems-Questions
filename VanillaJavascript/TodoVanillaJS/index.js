document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const addTodoButton = document.getElementById("addTodoButton");
  const todoList = document.getElementById("todoList");

  function createTaskList(task) {
    const li = document.createElement("li");
    li.textContent = task;

    // Remove todo Button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Del";
    removeButton.className = "removeButton";
    removeButton.onclick = () => {
      li.remove();
    };
    li.append(removeButton);

    // Complete Todo Button
    const completeTodoButton = document.createElement("button");
    completeTodoButton.textContent = "done";
    completeTodoButton.className = "completeTodoButton";
    completeTodoButton.onclick = () => {
      li.className = "completeTodo";
    };
    li.append(completeTodoButton);
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

// Fetch APi method using Vanilla JS
//   let ApiData = [];
//   function fetchApi() {
//     const url = "https://dummyjson.com/products";
//     fetch(url)
//       .then((res) => res.json())
//       .then((res) => (ApiData = res.products))
//       .catch((error) => {
//         throw new Error(error.message);
//       });
//   }
//   fetchApi();
//   console.log(ApiData);
