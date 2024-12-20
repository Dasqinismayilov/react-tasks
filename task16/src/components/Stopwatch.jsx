import React, { useState } from 'react';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(null); 

    const startStopwatch = () => {
        if (!isRunning) {
            setIsRunning(true);
            const newTimer = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
            setTimer(newTimer); 
        } else {
            setIsRunning(false);
            clearInterval(timer); 
        }
    };

    return (
        <div>
            <h2>Saniyəölçən: {time}</h2>
            <button onClick={startStopwatch}>
                {isRunning ? 'Dayandır' : 'Başlat'}
            </button>
        </div>
    );
};

export default Stopwatch;
