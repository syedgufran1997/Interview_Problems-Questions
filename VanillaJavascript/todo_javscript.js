// Create Todo
const TodoList = [{ id: 1, name: "CreateTodo" }];

// Add Todo
const addTodo = (name) => {
  const id = TodoList.length + 1;
  TodoList.push({ id, name });
};
addTodo("AddTodo");
addTodo("UpdateTodo");
addTodo("DeleteTodo");

// Delete Todo
const deleteTodo = (value) => {
  TodoList.splice(value, 1);
};
// deleteTodo(3);

// Update Todo
const updateTodo = (id, name) => {
  TodoList.map((item) => {
    if (item.id === id) {
      {
        item.name = name;
      }
    }
  });
};
// updateTodo(2, "Add Todo Gufran");

// console.log(TodoList);

// Accolite 1st round
/* const number = 2
const result = new Promise((resolve, reject) => 
if(number % 2 === 0){
resolve(console.log("even"))
}else if(number % 2 !== 0){
 )
  */

/* const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
} */

/* (function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})(); */

/* a = 20
console.log(a) */
