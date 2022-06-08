import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count, setCount] = useState(0)

  const handleCount = (e) => {
    setCount((prev) => (prev + e.target.value))
  }
  // let count = 0;
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" value={1} onClick={(e) => handleCount(e)}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" value={-1} onClick={(e) => handleCount(e)}>-</button>
    </div>
  );
};

export default Counter;
