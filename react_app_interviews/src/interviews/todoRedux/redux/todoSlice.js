"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        todo: action.payload,
        color: "",
        text: "",
        status: "pending",
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos?.filter((item) => action.payload !== item.id);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, text: "line-through", color: "red", status: "completed" }
          : item
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
