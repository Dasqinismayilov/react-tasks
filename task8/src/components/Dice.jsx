import React, { useState } from "react";
import "./index.css";

function Dice() {
  const [number, setNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setNumber(randomNumber);
  };

  const dots = Array(9)
    .fill(null)
    .map((_, index) => <div key={index} className="dot"></div>);

  return (
    <div className="dice" onClick={rollDice}>
      <div className={`face face-${number}`}>{dots}</div>
    </div>
  );
}

export default Dice;
