// src/components/Module1.js
import React, { useContext, useEffect } from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { ProgressContext } from '../contexts/ProgressContext';
import ProgressBar from './ProgressBar';
import QuizQuestion from './QuizQuestion';
import FlipCard from './FlipCard';
import DragAndDropMatch from './DragAndDropMatch';
import AIToolsAccordion from './AIToolsAccordion';

const Module1 = () => {
  const { progress, updateProgress } = useContext(ProgressContext);

  useEffect(() => {
    if (progress.module1 < 50) {
      updateProgress('module1', 50);
    }
  }, [progress, updateProgress]);

  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom>
        Module 1: Introduction to AI – THE BASICS
      </Typography>
      <ProgressBar progress={progress.module1} label="Module 1 Progress" />

      {/* Section 1.1: Understanding AI */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          1.1 Understanding AI
        </Typography>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6">What is AI?</Typography>
          <Typography variant="body1">
            AI uses algorithms and data to understand the world, make decisions, and generate outputs.
            Think of it as a super-smart assistant that uses technology to solve problems, automate tasks,
            and improve efficiency..
          </Typography>
        </Box>
        {/* Embedded YouTube Video */}
        <Box sx={{ my: 3, textAlign: 'center' }}>
          <Typography variant="subtitle1" gutterBottom>
            Watch: What is AI?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/c0m6yaGlZh4"
              title="What is AI?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
        {/* Interactive Quiz */}
        <QuizQuestion />
        {/* Visual Explanation (Flip Cards) */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h6" gutterBottom>
            How does AI work? (Visual)
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <FlipCard frontContent="Input Data" backContent="AI systems take in information as input." />
            <FlipCard frontContent="Processing" backContent="They analyze data to identify patterns." />
            <FlipCard frontContent="Output" backContent="They produce predictions or answers." />
            <FlipCard frontContent="Learning" backContent="They improve over time by learning from new data." />
          </Box>
        </Box>
        {/* Drag-and-Drop Matching */}
        <Box sx={{ my: 4 }}>
          <DragAndDropMatch />
        </Box>
        {/* Accordion with Detailed Explanations for AI Tools */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            1.2 Accessing AI Tools
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            Overview of popular AI platforms and tools. Click on each tool to see detailed information.
          </Typography>
          <AIToolsAccordion />
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Additional sections can go here */}
    </Container>
  );
};

export default Module1;



