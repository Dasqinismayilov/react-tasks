import React, { useState } from "react";
import "./index.css"; 

function Dice() {
  const [number, setNumber] = useState(1); 

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1; 
    setNumber(randomNumber); 
  };

  return (
    <div className="dice" onClick={rollDice}>
      {number} 
    </div>
  );
}

export default Dice;
