"use client";
import { useState } from "react";

export default function TodoPractice() {
  const [state, setState] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const handleClick = () => {
    if (state && state.length > 0) {
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, name: state, status: "Pending" },
      ]);
      setState("");
    } else {
      alert("Please Add Todo");
    }
  };

  const handleDelete = (id) => {
    // const deleteTodo = todoList?.filter((item, index) => item.id !== id);
    const deleteTodo = todoList?.filter(
      (item, index) => todoList.indexOf(item) !== id
    );
    setTodoList(deleteTodo);
  };

  const updateTodo = (id) => {
    if (state && state.length > 0 && todoList.length && todoList) {
      const updateList = todoList?.map((todo) =>
        todo.id === id && todo.status !== "Fullfilled"
          ? { ...todo, name: state }
          : todo
      );
      setTodoList(updateList);
      setState("");
    } else {
      alert("Please Enter Todo");
    }
  };

  const completeTodo = (id) => {
    const updateList = todoList?.map((todo) =>
      todo.id === id ? { ...todo, status: "Fullfilled" } : todo
    );
    setTodoList(updateList);
  };

  return (
    <>
      <div className="text-center">
        <div>
          <h1 className="text-4xl font-semibold my-4 ">Todo App</h1>
          <input
            type="text"
            value={state}
            onChange={(e) => handleChange(e)}
            placeholder="Add Todo"
            className="p-2 outline-none border border-blue-500 rounded-md  "
          />
          <button
            className="bg-blue-200 shadow-md rounded-md ms-2 p-2 "
            onClick={handleClick}
          >
            Add Todo
          </button>
        </div>

        <div className="mt-7 flex justify-center items-center flex-wrap ">
          {todoList &&
            todoList.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between m-3 border border-blue-400 py-2 px-2 max-w-96 w-1/6 rounded`}
              >
                <div
                  className={`${
                    item?.status === "Fullfilled" ? "line-through" : ""
                  }  w-1/2 text-start `}
                >
                  <span>{item.id} </span>
                  <span>{item?.name}</span>
                </div>

                <div className="w-1/2 flex justify-between ">
                  <span
                    onClick={() => updateTodo(item.id)}
                    className="cursor-pointer text-blue-600 px-1 text-2xl  "
                  >
                    &#9998;
                  </span>

                  <span
                    onClick={() => handleDelete(index)}
                    className="cursor-pointer text-red-600 text-2xl px-1 mx-1 "
                  >
                    X
                  </span>

                  <span
                    onClick={() => completeTodo(item.id)}
                    className=" cursor-pointer text-green-600 text-2xl px-1 "
                  >
                    &#10003;
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
