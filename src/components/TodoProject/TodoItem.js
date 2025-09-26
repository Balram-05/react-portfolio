import React, { useState, useContext } from "react";
import { TodoContext } from "../TodoContext";
import { Button, TextField, Card, CardContent } from "@mui/material";

const TodoItem = ({ todo }) => {
  const { toggleComplete, editTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <Card style={{ marginBottom: "10px" }}>
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              size="small"
            />
            <Button onClick={handleSave}>Save</Button>
          </>
        ) : (
          <>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {todo.text}
            </span>
            <Button onClick={() => toggleComplete(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </Button>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default TodoItem;
