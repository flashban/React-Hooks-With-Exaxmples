import React, { useState } from 'react';
import './style.css';

export default function UseStateHook() {
  const [count, setCount] = useState(0);

  const handleClickInc = () => {
    setCount(count + 1);
  };

  const handleClickDec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>The useState hook allows you to add state to functional components. Here's an example:</p>
      <p>You clicked {count} times</p>
      <button onClick={handleClickInc}>Click +</button>
      <button onClick={handleClickDec}>Click -</button>
    </div>
  );
}