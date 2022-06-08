import React, { useEffect } from "react";
import styles from "./task.module.css";
import { Counter } from "../Counter/index"
import axios from "axios";

const Task = () => {

  useEffect(() => {

  }, [])

  const getData = () => {
    axios.get("http://localhost:8080/").then((data) => console.log(data))
  }

  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text"></div>
      {/* Counter here */}
      <Counter />
      <button data-testid="task-remove-button"></button>
    </li>
  );
};

export default Task;
