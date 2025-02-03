// src/components/AIToolsAccordion.js
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const toolDetails = [
  {
    name: 'ChatGPT',
    primaryUse: 'General-purpose conversational AI assistant',
    capabilities:
      'Understands natural language, generates creative text, summarizes information, and assists with various queries.',
    limitations:
      'May produce inaccurate responses, requires careful prompt engineering, and sometimes lacks contextual understanding.',
    example: 'Drafting blog posts, answering customer queries, generating summaries.'
  },
  {
    name: 'Copilot',
    primaryUse: 'Code assistance and developer productivity tool',
    capabilities:
      'Provides code suggestions, error detection, auto-completion, and context-aware coding assistance for supported languages.',
    limitations:
      'May sometimes produce incorrect or suboptimal code, and its effectiveness depends on the context provided.',
    example: 'Assisting with code generation, debugging, and learning new programming patterns.'
  },
  {
    name: 'Google Bard',
    primaryUse: 'Creative idea generation and collaborative brainstorming',
    capabilities:
      'Generates creative responses, summarizes information, and helps with idea generation and content creation.',
    limitations:
      'Accuracy is still evolving and may occasionally provide outdated or less relevant information.',
    example: 'Brainstorming creative concepts, summarizing texts, generating content ideas.'
  },
  {
    name: 'Microsoft Copilot',
    primaryUse: 'Productivity tool integrated with Microsoft 365',
    capabilities:
      'Drafts documents, summarizes emails, generates reports, and provides insights directly within Office apps.',
    limitations:
      'Requires a Microsoft 365 subscription and is limited to the Microsoft ecosystem.',
    example: 'Creating reports in Word, summarizing data in Excel, drafting emails in Outlook.'
  }
];

const AIToolsAccordion = () => {
  return (
    <>
      {toolDetails.map((tool, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{tool.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle1" gutterBottom>
              Primary Use:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {tool.primaryUse}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Capabilities:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {tool.capabilities}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Limitations:
            </Typography>
            <Typography variant="body1" gutterBottom>
              {tool.limitations}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Example Use:
            </Typography>
            <Typography variant="body1">
              {tool.example}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default AIToolsAccordion;
