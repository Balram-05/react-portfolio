import { Typography } from "@mui/material";

function TimerDisplay({ time, formatTime }) {
  return (
    <Typography variant="h3" gutterBottom>
      {formatTime(time)}
    </Typography>
  );
}

export default TimerDisplay;
