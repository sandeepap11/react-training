import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const changeCounter = type => setCount(type === "-" ? count - 1 : count + 1);

  return (
    <div className="main-counter-class">
      <button onClick={() => changeCounter("-")}>-</button>
      <div>{count}</div>
      <button onClick={() => changeCounter("+")}>+</button>
    </div>
  );
}
