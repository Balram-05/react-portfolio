import { Card, CardContent, Typography, Box } from "@mui/material";
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

function WeatherCard({ weather }) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, mx: "auto", borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {weather.location.name}, {weather.location.country}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
          <img src={weather.current.condition.icon} alt="weather icon" />
          <Typography variant="h4" sx={{ ml: 2 }}>
            {weather.current.temp_c}°C
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Condition: {weather.current.condition.text}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
            <Box>
                <ThermostatIcon />
                <Typography variant="body2">Feels Like</Typography>
                <Typography variant="h6">{weather.current.feelslike_c}°C</Typography>
            </Box>
            <Box>
                <AirIcon />
                <Typography variant="body2">Wind Speed</Typography>
                <Typography variant="h6">{weather.current.wind_kph} km/h</Typography>
            </Box>
            <Box>
                <WaterDropIcon />
                <Typography variant="body2">Humidity</Typography>
                <Typography variant="h6">{weather.current.humidity}%</Typography>
            </Box>
        </Box>

      </CardContent>
    </Card>
  );
}

export default WeatherCard;