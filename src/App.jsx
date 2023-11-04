import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}

export default App;
