// src/components/QuizQuestion.js
import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Grid } from '@mui/material';

const optionsData = [
  { id: 1, text: 'A virtual assistant that sets reminders (Alexa, Siri, etc.)', isCorrect: true },
  { id: 2, text: 'A self-driving car navigating traffic', isCorrect: true },
  { id: 3, text: 'An email spam filter', isCorrect: true },
  { id: 4, text: 'A recommendation system suggesting movies', isCorrect: true },
  { id: 5, text: 'A traditional calculator doing division', isCorrect: false },
  { id: 6, text: 'A static website link', isCorrect: false },
  { id: 7, text: 'A motion-sensor light', isCorrect: false }
];

const QuizQuestion = () => {
  const [selected, setSelected] = useState({});
  const [revealed, setRevealed] = useState(false);

  const handleOptionClick = (optionId) => {
    if (!revealed) {
      setSelected((prev) => ({ ...prev, [optionId]: true }));
    }
  };

  const isAnswered = Object.keys(selected).length > 0;

  return (
    <Box sx={{ my: 3, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Which of the following do you think is AI?
      </Typography>
      <Grid container spacing={2}>
        {optionsData.map((option) => {
          const alreadySelected = !!selected[option.id];
          let transform = 'none';
          if (revealed && alreadySelected) {
            transform = option.isCorrect ? 'scale(1.1)' : 'scale(0.9)';
          }
          return (
            <Grid item xs={12} key={option.id}>
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: revealed
                    ? option.isCorrect
                      ? 'success.light'
                      : 'error.light'
                    : alreadySelected
                    ? 'action.selected'
                    : 'background.paper',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, background-color 0.3s',
                  transform: transform
                }}
                onClick={() => handleOptionClick(option.id)}
                elevation={3}
              >
                <Typography variant="body1">{option.text}</Typography>
                {revealed && (
                  <Typography variant="caption" color={option.isCorrect ? 'success.main' : 'error.main'}>
                    {option.isCorrect ? 'Correct' : 'Incorrect'}
                  </Typography>
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ mt: 2, textAlign: 'right' }}>
        <Button variant="contained" color="primary" disabled={!isAnswered} onClick={() => setRevealed(true)}>
          Reveal Answers
        </Button>
      </Box>
    </Box>
  );
};

export default QuizQuestion;

