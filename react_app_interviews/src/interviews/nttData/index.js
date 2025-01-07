// 7th Jan 3 to 3:30pm
// Basic of React and your current project details
// Dive deep into Porject details what, who are using your project
// How is Authentication working in your project
import { useState } from "react";
import "./styles.css";

// input tex box ,
// button reverse
// input read only to show result

// hello world
// olleh dlrow

// dlrow olleh

export default function App() {
  const [state, setState] = useState("");
  const [reverseValue, setReverseValue] = useState("");

  const handleClick = () => {
    if (state) {
      console.log(state);
    }
    // setReverseValue();
  };

  return (
    <div className="App">
      <div className="inputButtonWrap">
        <input
          type="text"
          value={state}
          placeholder="Enter Text"
          onChange={(e) => setState(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Reverse
        </button>
      </div>

      <div>
        <input type="text" readOnly value={reverseValue} />
      </div>
    </div>
  );
}
