import React, { useContext } from 'react'; // Import useContext from React
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from "@mui/material";
// Import the default export as TodoProvider and the named export as TodoContext
import TodoProvider, { TodoContext } from '../TodoContext';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoAppContent() {
  // Use the standard useContext hook with the imported TodoContext
  const { clearTodos } = useContext(TodoContext);

  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem", textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo List Project
      </Typography>

      <TodoInput />
      <TodoList />

      <Button
        onClick={clearTodos}
        variant="outlined"
        color="error"
        style={{ marginTop: "1rem" }}
      >
        Clear All Todos
      </Button>

      <br />
      <Link to="/" style={{ marginTop: '20px', display: 'inline-block', textDecoration: 'none' }}>
        <Button variant="contained">
          &larr; Back to Portfolio
        </Button>
      </Link>
    </Container>
  );
}

export default function Todo() {
  return (
    <TodoProvider>
      <TodoAppContent />
    </TodoProvider>
  );
}

