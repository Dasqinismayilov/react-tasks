import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="container">
            <div className="saat-block">
                <h2>Saat:
                    <span>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</span>
                </h2>
            </div>
        </div>
    );
};

export default Clock;
