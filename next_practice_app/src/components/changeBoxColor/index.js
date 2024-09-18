"use client";
import { useState } from "react";
import BoxComponent from "./boxComponent";
import "./styles.css";

// React JS || Syed Gufran - HCL Round 1 Assessment -------

// Create 3 boxes with CSS having white background colour and with black border (use flex css)
// These boxes should be clickable and on click their colour should change to green and no action can done post that.
// The boxes can be clicked in any order
// Once all boxes are clicked then their background colour should changed to white again.

export default function ChangeBoxColor() {
  const [color, setColor] = useState([
    { colorName: "#fff", id: 1 },
    { colorName: "#fff", id: 2 },
    { colorName: "#fff", id: 3 },
  ]);

  const handleColorChange = (id) => {
    console.log(id);
    setColor((prevColors) =>
      prevColors.map((item) =>
        item.id === id ? { ...item, colorName: "#00ff00" } : item
      )
    );
  };

  return (
    <div className="App">
      <h1>Change Box Color</h1>
      <div className="mainBoxWrap">
        {color && color.length
          ? color?.map((item, index) => (
              <BoxComponent item={item} handleColorChange={handleColorChange} />
            ))
          : ""}
      </div>
    </div>
  );
}
