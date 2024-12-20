import React, { useState } from 'react';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    const startStopwatch = () => {
        if (!isRunning) {
            setIsRunning(true);
            const timer = setInterval(() => setTime(prevTime => prevTime + 1), 1000);
            return timer;
        } else {
            setIsRunning(false);
            clearInterval(timer);
        }
    };

    return (
        <div>
            <h2>Saniyəölçən: {time}</h2>
            <button onClick={startStopwatch}>{isRunning ? 'Dayandır' : 'Başlat'}</button>
        </div>
    );
};

export default Stopwatch;


