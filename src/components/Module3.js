import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Stepper, Step, StepLabel, StepContent, Divider, IconButton } from '@mui/material';
import FlipCard from './FlipCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CaseStudy from './CaseStudy';

const Module3 = () => {
  const [expandedSteps, setExpandedSteps] = useState([]);

  const promptingTechniques = [
    {
      title: "1. Set Clear Objectives",
      explanation: "Every good prompt has a clear objective or purpose. When you give ChatGPT a prompt, make sure you know what you want to get out of the response. Are you looking for factual information, creative writing, a summary, or advice?",
      example: "Instead of: \"Tell me about project management\"\n\nBetter: \"Explain the 5 key phases of project management according to PMI standards, with one specific best practice for each phase.\""
    },
    {
      title: "2. Set the Tone and Style",
      explanation: "Tone and style keywords tell ChatGPT how to respond. If you want the answer to sound friendly, formal, humorous, or concise, include that in your prompt.",
      example: "Draft a professional yet approachable email to our team announcing the upcoming office renovation, keeping it concise and focusing on how it will benefit their daily work experience."
    },
    {
      title: "3. Give ChatGPT a persona",
      explanation: "Assigning a persona allows ChatGPT to answer from a particular role or perspective. This can help produce responses tailored to specific audiences or scenarios.",
      example: "You are a senior project manager with 15 years of experience in Finance. Review our current sprint timeline and suggest optimization strategies, focusing on resource allocation and risk mitigation."
    },
    {
      title: "4. Add delimiters",
      explanation: "Delimiters can help distinguish specific segments of text within a larger prompt. For example, they make it explicit for ChatGPT to understand what text needs to be translated, paraphrased, summarized, and so forth.",
      example: `Simplify the following technical documentation for our non-technical stakeholders:\n\n"""\nThe microservice architecture implements asynchronous message queuing through RabbitMQ, enabling event-driven communication between distributed system components.\n"""`
    },
    {
      title: "5. Provide step-by-step instructions",
      explanation: "Step-by-step instructions (chain-of-thought prompting) improves the model's ability to solve complex problems by generating intermediate reasoning steps rather than jumping directly to answers.",
      example: `Review our customer feedback data and:\n\nStep 1 - Categorize feedback into key themes\nStep 2 - Calculate sentiment scores for each category\nStep 3 - Identify top 3 areas for improvement\nStep 4 - Propose actionable solutions with estimated implementation timelines`
    },
    {
      title: "6. Provide examples",
      explanation: "Few-shot prompting provides examples to help the model infer the pattern, style, or type of response expected.",
      example: `Convert these technical requirements into user stories:\n\nTechnical: "Implement JWT authentication"\nUser Story: "As a user, I want to securely log in to my account so that my data remains protected"\n\nTechnical: "Implement real-time data synchronization"\nUser Story: "As a team member, I want to see updates from my colleagues in real-time so that I can collaborate effectively"\n\nTechnical: "Implement rate limiting on API endpoints"`
    }
  ];

  const handleStepClick = (index) => {
    setExpandedSteps(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      return [...prev, index];
    });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Container sx={{ py: 2, margin: '20px', maxWidth: '70% !important', padding: '0 2rem' }}>
        <Typography variant="h4" gutterBottom>
          Module 3: Effective Prompt Engineering
        </Typography>

        {/* Section 3.1: What is Prompt Engineering */}
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h5" gutterBottom>
            3.1 What is prompt engineering?
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <FlipCard 
              frontContent="What is a prompt?" 
              backContent="A prompt for a Large Language Model (LLM) is an input that initiates a conversation or triggers a response from the model."
              sx={{
                width: 280,
                height: 180,
                margin: 2
              }}
            />
            <FlipCard
              frontContent="What is prompt engineering?"
              backContent="Prompt engineering is the process of crafting prompts to optimize the output of a Large Language Model (LLM)."
              sx={{
                width: 280,
                height: 180,
                margin: 2
              }}
            />
            <FlipCard
              frontContent="Key Considerations"
              backContent="Clarity, context, and structure determine output quality"
              sx={{
                width: 280,
                height: 180,
                margin: 2
              }}
            />
          </Box>
        </Box>

        {/* Section 3.2: Effective Prompting Techniques */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            3.2 How to Prompt Effectively
          </Typography>
          <Stepper orientation="vertical" nonLinear>
            {promptingTechniques.map((tech, index) => (
              <Step key={index} active={expandedSteps.includes(index)}>
                <StepLabel
                  onClick={() => handleStepClick(index)}
                  sx={{ cursor: 'pointer' }}
                  StepIconComponent={() => (
                    <IconButton
                      size="small"
                      sx={{
                        transform: expandedSteps.includes(index) ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s'
                      }}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  )}
                >
                  <Typography variant="h6">{tech.title}</Typography>
                </StepLabel>
                {expandedSteps.includes(index) && (
                  <StepContent TransitionProps={{ unmountOnExit: true }}>
                    <Box sx={{ my: 2 }}>
                      <Typography variant="body1" paragraph>
                        {tech.explanation}
                      </Typography>
                      <Paper 
                        elevation={2} 
                        sx={{ 
                          p: 2, 
                          bgcolor: 'grey.50',
                          borderLeft: 4,
                          borderColor: 'primary.main'
                        }}
                      >
                        <Typography variant="subtitle2" gutterBottom color="primary">
                          Example Prompt:
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            whiteSpace: 'pre-wrap', 
                            fontFamily: 'monospace',
                            color: 'text.secondary',
                            fontSize: '1rem'
                          }}
                        >
                          {tech.example}
                        </Typography>
                      </Paper>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                  </StepContent>
                )}
              </Step>
            ))}
          </Stepper>
        </Box>

        {/* New Case Study Section */}
        <Box sx={{ my: 4, pb: 4 }}>
          <Typography variant="h5" gutterBottom>
            3.3 Practical Case Study
          </Typography>
          <CaseStudy />
        </Box>

      </Container>
    </Box>
  );
};

export default Module3; 