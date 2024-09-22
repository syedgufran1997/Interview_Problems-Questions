"use client";

import React from "react";
import TodoRedux from "./todoRedux";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function TodoReduxApp() {
  return (
    <>
      <Provider store={store}>
        <TodoRedux />
      </Provider>
    </>
  );
}
