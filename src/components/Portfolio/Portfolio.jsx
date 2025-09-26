import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,Typography, Button,Box,Grid,Card,CardContent, CardActions,Avatar,Chip, IconButton, Paper,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import TimerIcon from "@mui/icons-material/Timer";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import profilePhoto from "../../assets/profile-photo.jpg";

export default function Portfolio() {
  const navigate = useNavigate();

  const skills = {
    languages: ["Java", "C++", "JS"],
    frontend: ["React", "HTML", "CSS", "Material-UI"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "SQL"],
    operatingSystems: ["Linux", "Windows"],
    tools: ["Git", "GitHub", "VS Code", "Eclipse", "NetBeans"],
  };

  const projects = [
    {
      title: "Weather App",
      description: "Fetches and displays current weather data from an API.",
      path: "/weather",
      icon: <WebIcon fontSize="large" />,
    },
    {
      title: "Stopwatch",
      description:
        "A stopwatch with lap timing, start, stop, and reset functionality.",
      path: "/stopwatch",
      icon: <TimerIcon fontSize="large" />,
    },
    {
      title: "Todo List",
      description:
        "A classic todo list to add, manage, and track your daily tasks.",
      path: "/todo",
      icon: <FormatListBulletedIcon fontSize="large" />,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: "16px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            mb: 6,
            background: "linear-gradient(135deg, #e3f2fd 30%, #bbdefb 90%)",
          }}
        >
          <Avatar
            src={profilePhoto}
            sx={{
              width: 150,
              height: 150,
              mr: { xs: 0, md: 4 },
              mb: { xs: 2, md: 0 },
              border: "4px solid #1976d2",
            }}
          />
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: "bold", color: "#1a237e" }}
            >
              Balram Charaniya
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              MERN Stack Developer | Crafting Digital Experiences
            </Typography>
            <Box>
              <IconButton
                href="https://github.com/Balram-05"
                target="_blank"
                aria-label="github"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/balram-charaniya"
                target="_blank"
                aria-label="linkedin"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="mailto:charaniya.balram.2005@gmail.com"
                aria-label="email"
              >
                <EmailIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Paper>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", borderRadius: "16px" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  About Me
                </Typography>
                <Typography color="text.secondary">
                  I am a passionate B.Tech student at SKIT Jaipur, expecting to
                  graduate in 2027. With a strong foundation in full-stack
                  development, I love bringing ideas to life and building
                  efficient, scalable web applications using the MERN stack.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", borderRadius: "16px" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  Technical Skills
                </Typography>
                <Box>
                  {Object.entries(skills).map(([category, skillList]) => (
                    <Box key={category} sx={{ mb: 1 }}>
                      {skillList.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          variant="outlined"
                          sx={{ m: 0.5 }}
                        />
                      ))}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          My Work
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item key={project.title} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Box sx={{ mb: 2, color: "#1976d2" }}>{project.icon}</Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: "medium" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => navigate(project.path)}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
