import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Grid } from '@mui/material';

const ToolSelectionQuestion = ({ onComplete }) => {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const options = [
    { id: 1, text: 'ChatGPT', isCorrect: true },
    { id: 2, text: 'Google Bard', isCorrect: true },
    { id: 3, text: 'Microsoft Copilot', isCorrect: false },
    { id: 4, text: 'Copilot', isCorrect: false },
  ];

  return (
    <Box sx={{ my: 3, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Which tool is best for creative writing tasks?
      </Typography>
      <Grid container spacing={2}>
        {options.map((option) => (
          <Grid item xs={12} key={option.id}>
            <Paper
              onClick={() => !revealed && setSelected(option.id)}
              sx={{
                p: 2,
                cursor: 'pointer',
                backgroundColor: revealed
                  ? option.isCorrect
                    ? 'success.light'
                    : 'error.light'
                  : selected === option.id
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
        ))}
      </Grid>
      <Box sx={{ mt: 2, textAlign: 'right' }}>
        <Button
          variant="contained"
          color="primary"
          disabled={selected === null}
          onClick={() => {
            setRevealed(true);
            if (onComplete) onComplete();
          }}
        >
          Reveal Answer
        </Button>
      </Box>
    </Box>
  );
};

export default ToolSelectionQuestion;

