// src/components/ToolSelectionMultiQuestion.js
import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Grid } from '@mui/material';

const correctAnswers = [1, 2]; // ChatGPT and Google Bard

const options = [
  { id: 1, text: 'ChatGPT', isCorrect: true },
  { id: 2, text: 'Google Bard', isCorrect: true },
  { id: 3, text: 'Microsoft Copilot', isCorrect: false },
  { id: 4, text: 'Copilot', isCorrect: false },
];

const ToolSelectionMultiQuestion = () => {
  const [selected, setSelected] = useState([]);
  const [revealed, setRevealed] = useState(false);

  const toggleSelection = (optionId) => {
    if (revealed) return;
    setSelected((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleReveal = () => {
    setRevealed(true);
    // Check if selected array matches the correct answers (order doesn't matter)
    const sortedSelected = [...selected].sort();
    const sortedCorrect = [...correctAnswers].sort();
    const isCorrect =
      sortedSelected.length === sortedCorrect.length &&
      sortedSelected.every((value, index) => value === sortedCorrect[index]);
  };

  return (
    <Box sx={{ my: 3, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Which tool(s) are best for creative writing tasks? (Select all that apply)
      </Typography>
      <Grid container spacing={2}>
        {options.map((option) => {
          const isSelected = selected.includes(option.id);
          return (
            <Grid item xs={12} key={option.id}>
              <Paper
                onClick={() => toggleSelection(option.id)}
                sx={{
                  p: 2,
                  cursor: 'pointer',
                  backgroundColor: revealed
                    ? correctAnswers.includes(option.id)
                      ? 'success.light'
                      : 'error.light'
                    : isSelected
                    ? 'action.selected'
                    : 'background.paper',
                  transition: 'background-color 0.3s',
                }}
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
        <Button
          variant="contained"
          color="primary"
          disabled={selected.length === 0}
          onClick={handleReveal}
        >
          Reveal Answer
        </Button>
      </Box>
    </Box>
  );
};

export default ToolSelectionMultiQuestion;
