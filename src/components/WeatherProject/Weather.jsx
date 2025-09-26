import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import { Container, Typography, Box, CircularProgress, Alert, CssBaseline, Button } from "@mui/material";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bgColor, setBgColor] = useState("#f0f0f0");

  useEffect(() => {
    if (weather) {
      const condition = weather.current.condition.text.toLowerCase();
      if (condition.includes("sunny") || condition.includes("clear")) {
        setBgColor("linear-gradient(to top, #37ecba 0%, #72afd3 100%)");
      } else if (condition.includes("cloudy") || condition.includes("overcast")) {
        setBgColor("linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)");
      } else if (condition.includes("rain") || condition.includes("drizzle")) {
        setBgColor("linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)");
      } else {
        setBgColor("#f0f0f0");
      }
    }
  }, [weather]);

  const fetchWeather = (city) => {
    const API_KEY = "c242a5658d124d3f88d164746252309";
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    setLoading(true);
    setError(null);
    setWeather(null);

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setWeather(data);
          localStorage.setItem('lastCity', city);
        } else {
          setWeather(null);
          setError("City not found! Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setError("Failed to fetch weather data. Check your connection.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{
        minHeight: '100vh',
        background: bgColor,
        transition: 'background 0.5s ease-in-out',
        py: 4
      }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              React Weather App 🌤
            </Typography>
            <Typography variant="subtitle1">
              Find out the weather in any city
            </Typography>
          </Box>

          <SearchBox onSearch={fetchWeather} />

          {loading && <Box sx={{ display: 'flex', justifyContent: 'center' }}><CircularProgress /></Box>}
          
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
          
          {weather && <WeatherCard weather={weather} />}
          
          {!loading && !weather && !error && (
            <Typography sx={{ textAlign: 'center', mt: 4 }}>
              Enter a city to get started!
            </Typography>
          )}

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="contained">
                &larr; Back to Portfolio
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}

