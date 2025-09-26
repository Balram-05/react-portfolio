import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <TextField
        variant="outlined"
        size="small"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <Button
        onClick={handleAdd}
        variant="contained"
        style={{ marginLeft: "10px" }}
      >
        Add
      </Button>
    </div>
  );
};

export default TodoInput;
