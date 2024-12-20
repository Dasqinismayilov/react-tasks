import React, { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const [isEditing, setIsEditing] = useState(false); 
  const timerRef = useRef(null);
  const inputRef = useRef(null); 

  const startTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false); 
    } else {
      timerRef.current = setInterval(countDown, 1000);
      setIsRunning(true); 
    }
  };

  const countDown = () => {
    setTime((prevTime) => {
      const newTime = prevTime - 1;
      if (newTime <= 0) {
        clearInterval(timerRef.current);
        setIsRunning(false); 
        return 0; 
      }
      return newTime;
    });
  };

  const increaseTime = () => {
    if (!isRunning) { 
      setTime(time + 1); 
    }
  };

  const resetTime = () => {
    clearInterval(timerRef.current); 
    setIsRunning(false); 
    setTime(0); 
  };

  const handleTimeClick = () => {
    setIsEditing(true); 
  };

  const handleInputChange = (e) => {
    const newTime = Number(e.target.value);
    if (!isNaN(newTime) && newTime >= 0) {
      setTime(newTime); 
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false); 
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false); 
    }
  };

  return (
    <div>
      <h2>
        Taymer:{" "}
        {isEditing ? (
          <input
            ref={inputRef}
            type="number"
            value={time}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleInputKeyPress}
            autoFocus
          />
        ) : (
          <span onClick={handleTimeClick}>{time} saniye</span>
        )}
      </h2>
      <button onClick={startTimer}>
        {isRunning ? 'Durdur' : 'Başlat'}
      </button>
      <button onClick={increaseTime} disabled={isRunning}>
        Vaxtı Artır
      </button>
      <button onClick={resetTime}>
        Sıfırla
      </button>
    </div>
  );
};

export default Timer;
