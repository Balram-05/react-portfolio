import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Typography } from "@mui/material";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoAppContent({ todos, addTodo, toggleComplete, editTodo, clearTodos }) {
  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem", textAlign: "center" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo List Project
      </Typography>

      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} editTodo={editTodo} />

      <Button
        onClick={clearTodos}
        variant="outlined"
        color="error"
        style={{ marginTop: "1rem" }}
      >
        Clear All Todos
      </Button>

      <br />
      <Link
        to="/"
        style={{ marginTop: "20px", display: "inline-block", textDecoration: "none" }}
      >
        <Button variant="contained">&larr; Back to Portfolio</Button>
      </Link>
    </Container>
  );
}

export default TodoAppContent;
