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

const AISecurityQuiz = ({ 
  onComplete, 
  title, 
  questions,
  successMessage,
  errorMessage 
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

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
    const isFullyCorrect = selectedAnswers.length === correctAnswers.length && 
      selectedAnswers.every(a => correctAnswers.includes(a));
    
    const isPartiallyCorrect = selectedAnswers.some(a => correctAnswers.includes(a)) &&
      selectedAnswers.length <= correctAnswers.length;
    
    if (isFullyCorrect) {
      onComplete();
    }
  };

  const handleRetry = () => {
    setSelectedAnswers([]);
    setShowResult(false);
  };

  const getResultStatus = () => {
    const correctAnswers = questions.filter(q => q.correct).map(q => q.id);
    const isFullyCorrect = selectedAnswers.length === correctAnswers.length && 
      selectedAnswers.every(a => correctAnswers.includes(a));
    const isPartiallyCorrect = selectedAnswers.some(a => correctAnswers.includes(a)) &&
      selectedAnswers.length <= correctAnswers.length;

    return {
      severity: isFullyCorrect ? "success" : isPartiallyCorrect ? "warning" : "error",
      message: isFullyCorrect 
        ? (successMessage || "Correct!") 
        : isPartiallyCorrect 
          ? "Partially correct! Keep going..." 
          : (errorMessage || "Incorrect. Please try again.")
    };
  };

  return (
    <Box sx={{ mt: 4, p: 3, border: '1px solid #e0e0e0', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ textDecoration: 'underline' }}>
        Checkpoint Quiz
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mb: 3 }}>
        {title}
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
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Alert severity={getResultStatus().severity} sx={{ flex: 1 }}>
              {getResultStatus().message}
            </Alert>
            {getResultStatus().severity !== "success" && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleRetry}
              >
                Try Again
              </Button>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AISecurityQuiz; 