// src/components/AIDetailsAccordion.js
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AIDetailsAccordion = () => {
  const steps = [
    { title: "Input Data", content: "AI systems take in information as input." },
    { title: "Processing", content: "They analyze data to find patterns." },
    { title: "Output", content: "They produce predictions or answers." },
    { title: "Learning", content: "They improve over time by learning from new data." }
  ];

  return (
    <>
      {steps.map((step, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{step.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{step.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default AIDetailsAccordion;
