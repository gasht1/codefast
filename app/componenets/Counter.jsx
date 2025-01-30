import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const Decreamnt = () => {
    setCount(count - 1);
  };
  const inecreamnt = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div>
        <button onClick={Decreamnt}>minus from your current value</button>
        <h1>{count}</h1>

        <div>
          <button onClick={inecreamnt}>add to your value </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
