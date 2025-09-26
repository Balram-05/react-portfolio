import { Button, Stack } from "@mui/material";

function Controls({ isRunning, start, stop, reset, lap }) {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" mb={3}>
      {!isRunning ? (
        <Button variant="contained" color="success" onClick={start}>
          Start
        </Button>
      ) : (
        <Button variant="contained" color="warning" onClick={stop}>
          Stop
        </Button>
      )}
      <Button variant="contained" color="error" onClick={reset}>
        Reset
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={lap}
        disabled={!isRunning}
      >
        Lap
      </Button>
    </Stack>
  );
}

export default Controls;
