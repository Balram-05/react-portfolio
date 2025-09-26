import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
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
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(t => (t.id === id ? { ...t, text: newText } : t)));
  };

   const clearTodos = () => {
    localStorage.removeItem("todos");
    setTodos([]); 
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleComplete, editTodo, clearTodos}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
