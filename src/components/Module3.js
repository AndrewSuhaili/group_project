import React, { useContext, useEffect, useState } from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Paper, Grid, Button } from '@mui/material';
import { ProgressContext } from '../contexts/ProgressContext';
import ProgressBar from './ProgressBar';
import FlipCard from './FlipCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DragAndDropPrompts from './DragAndDropPrompts';

const Module3 = () => {
  const { progress, updateProgress } = useContext(ProgressContext);
  const moduleKey = 'module3';
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (progress[moduleKey] < 30) {
      updateProgress(moduleKey, 30);
    }
  }, [progress, updateProgress]);

  const handleExerciseComplete = () => {
    if (progress[moduleKey] < 100) {
      updateProgress(moduleKey, 100);
    }
  };

  const promptingExamples = [
    {
      title: "Clear Instructions",
      good: "Analyze this sales report and identify the top 3 performing products in Q3. Present the results in a bulleted list with percentage growth.",
      bad: "Tell me about the sales report"
    },
    {
      title: "Reference Text",
      good: "Using the style guide provided in the document below, rewrite this product description to match our brand voice: [paste text]",
      bad: "Make this sound better"
    },
    {
      title: "Complex Tasks",
      good: "Break down this market research process into 5 distinct steps. For each step, provide: 1) Time required 2) Required resources 3) Expected output",
      bad: "Explain market research"
    }
  ];

  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom>
        Module 3: Effective Prompt Engineering
      </Typography>
      <ProgressBar progress={progress[moduleKey]} label="Module 3 Progress" />

      {/* Section 3.1: What is Prompt Engineering */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          3.1 What is prompt engineering?
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <FlipCard 
            frontContent="What is a prompt?" 
            backContent="A prompt for a Large Language Model (LLM) is an input that initiates a conversation or triggers a response from the model."
          />
          <FlipCard
            frontContent="What is prompt engineering?"
            backContent="Prompt engineering is the process of crafting prompts to optimize the output of a Large Language Model (LLM)."
          />
          <FlipCard
            frontContent="Key Considerations"
            backContent="Clarity, context, and structure determine output quality"
          />
        </Box>
      </Box>

      {/* Section 3.2: Effective Prompting Techniques */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          3.2 How to Prompt Effectively
        </Typography>
        
        <DragAndDropPrompts onComplete={handleExerciseComplete} />
      </Box>
    </Container>
  );
};

export default Module3; 