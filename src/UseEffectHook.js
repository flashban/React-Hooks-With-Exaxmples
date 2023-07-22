import React, { useState, useEffect } from 'react';
import './style.css';

export default function UseEffectHook() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>The useEffect hook allows you to perform side effects in functional components. Here's an example:</p>
      <p>The time is {time.toLocaleTimeString()}</p>
    </div>
  );
}