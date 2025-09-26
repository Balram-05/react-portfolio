import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, CircularProgress } from '@mui/material';

export default function NotFound() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Timer to update the countdown every second
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Timer to redirect to the homepage after 5 seconds
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Cleanup function to clear timers if the component unmounts
    return () => {
      clearInterval(countdownInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]); // Dependency array ensures this effect runs only once

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#f4f6f8',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', color: '#1a237e' }}>
          404
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Oops! Page Not Found.
        </Typography>
        <Typography color="text.secondary" paragraph>
          The page you are looking for does not exist. You will be redirected to the homepage shortly.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <CircularProgress size={24} sx={{ mr: 2 }} />
          <Typography>
            Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
