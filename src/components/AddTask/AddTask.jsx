import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  console.log(input);
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={(e) => handleInput(e)} />
      <button data-testid="add-task-button">Add Task</button>
    </div>
  );
};

export default AddTask;
