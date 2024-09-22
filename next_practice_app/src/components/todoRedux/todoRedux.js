"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./RtkQuery/todoSlice";

export default function TodoRedux() {
  const [state, setState] = useState("");
  // const [todoList, setTodoList] = useState([]);

  const todoList = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setState(value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(state));
    // setTodoList([
    //   ...todoList,
    //   {
    //     todo: state,
    //     id: todoList.length + 1,
    //     color: "",
    //     text: "",
    //     status: "pending",
    //   },
    // ]);
    setState("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    // const deleteTodo = todoList.filter((item) => id !== item.id);
    // setTodoList(deleteTodo);
  };

  const handleUpdateTodo = (id) => {
    dispatch(updateTodo(id));
    // setTodoList((prevState) =>
    //   prevState.map((item) =>
    //     item?.id === id
    //       ? {
    //           ...item,
    // text: "line-through",
    // color: "red",
    // status: "completed",
    //         }
    //       : item
    //   )
    // );
  };

  return (
    <div className="text-center mt-5">
      <div>
        <input
          type="text"
          value={state}
          placeholder="Enter Todo"
          onChange={handleInputChange}
          className="border p-2 mx-5 outline-none "
        />
        <button onClick={handleAddTodo} className="outline-none border p-2 ">
          Add Todo{" "}
        </button>
      </div>

      <div className="grid grid-cols-5 gap-5 mt-5 p-5 border-t-2 ">
        {todoList &&
          todoList?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border border-black p-2  "
            >
              <p
                style={{
                  textDecoration: `${item?.text}`,
                  color: `${item?.color}`,
                }}
              >
                <span>{index + 1} </span>
                <span>{item?.todo} </span>
              </p>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                  onClick={() => handleUpdateTodo(item.id)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                  onClick={() => handleDeleteTodo(item.id)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
