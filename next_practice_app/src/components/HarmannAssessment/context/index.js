"use client";
import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const url = "https://fakestoreapi.com/PRODUCTS";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res))
      .catch((error) => setError(error));
  }, []);
  return (
    <MyContext.Provider value={{ data, error }}>{children}</MyContext.Provider>
  );
};

export default MyContext;
