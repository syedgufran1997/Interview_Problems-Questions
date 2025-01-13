import { useState } from "react";
import "./styles.css";

// counter + and  - onclick of button
// min 0 to max 100

// progress bar should be increametal from 0 to 25, 50, 75, 100
// on click of start button in smooth transition

export default function App() {
  const [count, setCount] = useState(0);
  // const [progress, setProgress] = useState(false);

  const handleIncreaseClick = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const handleDecreaseClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleProgressbar = () => {
    setCount(100);
  };

  return (
    <>
      <div className="App">
        <button onClick={handleIncreaseClick}>Increase</button>
        {/* <input type="number" value={count} placeholder="Count" /> */}
        {count}
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>

      <div className="mainProgressWrap">
        <div
          // className="progressBarbefore"
          style={{
            backgroundColor: "red",
            height: "49px",
            borderRadius: "40px",
            width: `${count}%`,
          }}
        ></div>
      </div>

      <button onClick={handleIncreaseClick}>Start</button>
    </>
  );
}
