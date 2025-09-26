import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  const inProgress = todos.filter((t) => !t.completed);
  const completed = todos.filter((t) => t.completed);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 1 }}>
        <h3>In Progress</h3>
        {inProgress.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <h3>Completed</h3>
        {completed.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
