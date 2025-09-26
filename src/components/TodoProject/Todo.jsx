import React, { useState, useEffect } from "react";
import TodoAppContent from "./TodoAppContent";

export default function Todo() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  const clearTodos = () => {
    localStorage.removeItem("todos");
    setTodos([]);
  };

  return (
    <TodoAppContent
      todos={todos}
      addTodo={addTodo}
      toggleComplete={toggleComplete}
      editTodo={editTodo}
      clearTodos={clearTodos}
    />
  );
}
