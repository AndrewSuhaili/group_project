// src/components/Module1.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import QuizQuestion from './QuizQuestion';
import FlipCard from './FlipCard';
import DragAndDropMatch from './DragAndDropMatch';
import AIToolsAccordion from './AIToolsAccordion';

const aiTerms = [
  { id: 1, text: 'Generative AI', definition: 'Creates new content based on input data.' },
  { id: 2, text: 'Natural Language Processing (NLP)', definition: 'Helps computers understand human language.' },
  { id: 3, text: 'Computer Vision', definition: 'Allows computers to "see" and interpret visual information.' },
  { id: 4, text: 'Machine Learning', definition: 'Enables systems to learn from data without explicit programming.' },
  { id: 5, text: 'Deep Learning', definition: 'Uses neural networks with many layers to analyze complex data.' },
  { id: 6, text: 'Chatbots', definition: 'Programs that simulate conversation with users.' },
];

const Module1 = () => {

  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom>
        Module 1: Introduction to AI – THE BASICS
      </Typography>

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
            and improve efficiency.
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
          <DragAndDropMatch terms={aiTerms} />
        </Box>

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
    </Container>
  );
};

export default Module1;



