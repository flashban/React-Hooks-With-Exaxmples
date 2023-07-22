import React from 'react';
import './style.css';
import UseStateHook from './UseStateHook.js'
import UseEffectHook from './UseEffectHook.js'

export default function App() {
  return (
    <div>
      <h1>Hooks code Examples</h1>
      <p>--------------------------------------------</p>
      <p>1.UseState Hook</p>
      <p>--------------------------------------------</p>
      <UseStateHook/>
      <p>--------------------------------------------</p>
      <p>2.UseEffect Hook</p>
      <p>--------------------------------------------</p>
      <UseEffectHook/>
    </div>
  );
}
