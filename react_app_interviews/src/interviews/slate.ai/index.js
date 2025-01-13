import { useState } from "react";
import "./styles.css";

// counter + and  - onclick of button
// min 0 to max 100

// progress bar should be increametal from 0 to 25, 50, 75, 100
// on click of start button in smooth transition

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncreaseClick = () => {
    if (count < 100) {
      setCount(count + 25);
    }
  };

  const handleDecreaseClick = () => {
    if (count > 0) {
      setCount(count - 25);
    }
  };

  return (
    <>
      <div className="App">
        <button onClick={handleIncreaseClick}>Increase</button>
        {count}
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>

      <div className="mainProgressWrap">
        <div className="progressBarbefore" style={{ width: `${count}%` }}></div>
      </div>
    </>
  );
}
