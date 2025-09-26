import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const SearchBox = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", justifyContent: "center", mb: 4 }}
    >
      <TextField
        label="Enter city name"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mr: 2, width: "300px" }}
      />
      <Button type="submit" variant="contained" size="large">
        Get Weather
      </Button>
    </Box>
  );
};

export default SearchBox;