import "./App.css";
import TodoItem from "./TodoList/TodoItem";
import TodoList from "./TodoList/todoList";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);

  // create a function to add a task to the list
  const addTask = (task) => {
    setTodos([...todos, task]);
  };
  const clearTask = () => {
    setTodos([]);
  };
  return (
    <div className="Wrapper">
      <div className="userList">
        <TodoList addTask={addTask} clearTask={clearTask} />
        <TodoItem item={todos} />
      </div>
    </div>
  );
}

export default App;
