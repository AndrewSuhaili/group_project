// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';

function LandingPage() {
  const navigate = useNavigate();
  const modules = [
    { id: 1, title: 'Module 1: Introduction to AI' },
    { id: 2, title: 'Module 2: Chatbots and Assistants' },
    { id: 3, title: 'Module 3: Understanding Prompts' },
    { id: 4, title: 'Module 4: TBD' },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Stryker AI Training
      </Typography>
      <Grid container spacing={4}>
        {modules.map((mod) => (
          <Grid item xs={12} sm={6} md={3} key={mod.id}>
            <Card elevation={5} sx={{ borderRadius: 2 }}>
              <CardActionArea onClick={() => navigate(`/module${mod.id}`)}>
                <CardContent>
                  <Typography variant="h6" align="center">
                    {mod.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Extra Resources Bar */}
      <Box sx={{ mt: 4, p: 2, backgroundColor: 'primary.light', borderRadius: 2 }}>
        <Typography variant="body1" align="center" color="white">
          Extra Resources: Documentation, links, and downloads
        </Typography>
      </Box>
    </Container>
  );
}

export default LandingPage;
