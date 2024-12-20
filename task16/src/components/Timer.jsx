import React, { useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0); 
    const [isRunning, setIsRunning] = useState(false); 
    let timer;

    const startTimer = () => {
        if (isRunning) {
            setIsRunning(false);
            clearInterval(timer);
        } else {
            setIsRunning(true);
            timer = setInterval(() => {
                if (timer > 0) {
                    setTime(prevTime => prevTime - 1); 
                } else {
                    alert('Taymer bitdi!');
                    clearInterval(timer); 
                    setIsRunning(false);
                }
            }, 1000);
        }
    };

    const increaseTime = () => {
        if (!isRunning) { 
            setTime(timer + 1); 
        }
    };

    const resetTime = () => {
        setTime(0); 
        setIsRunning(false); 
        clearInterval(timer); 
    };

    return (
        <div>
            <h2>Taymer: {time}</h2>
            <button onClick={startTimer}>
                {isRunning ? 'Pauza' : 'Başlat'}
            </button>
            <button onClick={increaseTime}>Vaxtı Artır</button>
            <button onClick={resetTime}>Sıfırla</button>
        </div>
    );
};

export default Timer;
