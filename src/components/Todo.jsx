import React, { useState } from "react";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div key={todo.id}>
      <div
        className={`todo-text ${todo.isComplete ? "completed" : ""}`}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>
      <button className="removeTodoBtn" onClick={() => removeTodo(todo.id)}>
        Remove
      </button>
    </div>
  ));
}

export default Todo;
