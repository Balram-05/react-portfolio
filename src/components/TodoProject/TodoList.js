import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, editTodo }) => {
  const inProgress = todos.filter((t) => !t.completed);
  const completed = todos.filter((t) => t.completed);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 1 }}>
        <h3>In Progress</h3>
        {inProgress.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <h3>Completed</h3>
        {completed.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
