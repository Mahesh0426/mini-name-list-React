import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const TodoList = (props) => {
  const { addTask, clearTask } = props;

  // const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    addTask(input);

    // reset input to empty string
    setInput("");
  };
  const handeOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <Display name={input} />
      <input type="text" value={input} onChange={handeOnChange} />
      <Button buttonFunction={handleOnClick} buttonName="addTask" />
      <Button buttonFunction={clearTask} buttonName="clearTask" />
    </div>
  );
};

export default TodoList;
