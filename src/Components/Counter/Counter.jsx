"use client"
import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Counter is : {counter}</h2>
      <div className="btn btn-primary" onClick={()=> setCounter(counter+1)}>Increase</div>
      <div className="btn btn-primary" onClick={()=> setCounter(counter-1)}>Decrase</div>
    </div>
  );
};

export default Counter;