"use client";
import { useEffect, useState } from "react";
import "./styles.css";

// Create a component where the word Hello should be changed to Good, Better, Best each time page render
export default function App() {
  const [state, setState] = useState("");

  const array = [
    { name: "hello", key: 1 },
    { name: "Good", key: 2 },
    { name: "bad", key: 3 },
    { name: "better", key: 4 },
  ];

  const refershValue = array.splice(1, 1);
  console.log("refershValue", refershValue);

  useEffect(() => {
    let key = 1;
    Math.random(0, 4);
    // console.log("random",  ));

    // setState();
  }, []);

  return (
    <div className="App">
      <h1>{} CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
