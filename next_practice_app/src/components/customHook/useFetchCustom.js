"use client";
// Custom Hooks In React
// Powerfull way to extract and reuse logic between components.
// A custom hook in React is a JavaScript function that allows you to reuse stateful logic across components.

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not okay");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
