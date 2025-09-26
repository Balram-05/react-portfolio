import { Typography, List, ListItem, ListItemText } from "@mui/material";

function Laps({ laps, formatTime }) {
  return (
    <>
      <Typography variant="h6">Laps</Typography>
      <List>
        {laps.map((lap, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Lap ${index + 1}: ${formatTime(lap)}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Laps;
