import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  FormGroup, 
  FormControlLabel, 
  Checkbox, 
  Button, 
  Alert 
} from '@mui/material';

const AISecurityQuiz = ({ onComplete }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 'A',
      text: 'General industry best practices.',
      correct: false
    },
    {
      id: 'B',
      text: "A client's private financial details.",
      correct: true
    },
    {
      id: 'C',
      text: 'Internal product development plans.',
      correct: true
    },
    {
      id: 'D',
      text: 'Publicly available company policies.',
      correct: false
    }
  ];

  const handleChange = (event) => {
    const answer = event.target.value;
    setSelectedAnswers(prev => 
      prev.includes(answer) 
        ? prev.filter(a => a !== answer)
        : [...prev, answer]
    );
  };

  const handleSubmit = () => {
    setShowResult(true);
    const correctAnswers = questions.filter(q => q.correct).map(q => q.id);
    const isCorrect = selectedAnswers.length === correctAnswers.length && 
      selectedAnswers.every(a => correctAnswers.includes(a));
    
    if (isCorrect) {
      onComplete();
    }
  };

  const handleRetry = () => {
    setSelectedAnswers([]);
    setShowResult(false);
  };

  return (
    <Box sx={{ mt: 4, p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ textDecoration: 'underline' }}>
        Checkpoint Quiz
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mb: 3 }}>
        Which of the following are not acceptable data entries into AI tools like ChatGPT?
      </Typography>
      <Typography variant="subtitle2" gutterBottom sx={{ mb: 3 }}>
        Select all that apply.
      </Typography>
      <FormGroup>
        {questions.map((question) => (
          <FormControlLabel
            key={question.id}
            control={
              <Checkbox
                checked={selectedAnswers.includes(question.id)}
                onChange={handleChange}
                value={question.id}
                disabled={showResult}
              />
            }
            label={question.text}
            sx={{ mb: 1 }}
          />
        ))}
      </FormGroup>
      
      {!showResult && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={selectedAnswers.length === 0}
          sx={{ mt: 2 }}
        >
          Submit Answers
        </Button>
      )}

      {showResult && (
        <Box sx={{ mt: 2 }}>
          {selectedAnswers.length === 2 && 
           selectedAnswers.includes('B') && 
           selectedAnswers.includes('C') ? (
            <Alert severity="success">
              Correct! Private client information and internal development plans should never be shared with AI tools.
            </Alert>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Alert severity="error" sx={{ flex: 1 }}>
                Incorrect. Remember that sensitive business information and client data must be protected.
              </Alert>
              <Button
                variant="contained"
                color="primary"
                onClick={handleRetry}
              >
                Try Again
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default AISecurityQuiz; 