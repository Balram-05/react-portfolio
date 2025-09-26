import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Container, Paper, Typography, Button, Box } from "@mui/material";
import TimerDisplay from "./TimerDisplay";
import Controls from "./Controls";
import Laps from "./Laps";

export default function Stopwatch() {
  const [time, setTime] = useState(() => Number(localStorage.getItem("time")) || 0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState(() => {
    const saved = localStorage.getItem("laps");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10); 
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    localStorage.setItem("time", time);
  }, [time]);

  useEffect(() => {
    localStorage.setItem("laps", JSON.stringify(laps));
  }, [laps]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${centiseconds.toString().padStart(2, "0")}`;
  };

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    localStorage.removeItem("time");
    localStorage.removeItem("laps");
  };
  const lap = () => setLaps((prev) => [...prev, time]);

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom>
          Stopwatch
        </Typography>
        
        <TimerDisplay time={time} formatTime={formatTime} />
        <Controls
          isRunning={isRunning}
          start={start}
          stop={stop}
          reset={reset}
          lap={lap}
        />
        <Laps laps={laps} formatTime={formatTime} />

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained">
              &larr; Back to Portfolio
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}

