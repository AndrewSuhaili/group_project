import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Paper, Accordion, AccordionSummary, AccordionDetails, Button, CircularProgress, Alert } from '@mui/material';
import FlipCard from './FlipCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Module4 = () => {
  const riskCards = [
    {
      front: "Data Privacy Breach:",
      back: "Information entered into AI tools could become public, leading to potential violations of data protection regulations and CompanyX policies on safeguarding personal and confidential information."
    },
    {
      front: "Intellectual Property Uncertainties:",
      back: "Ownership of AI-generated content is unclear and may contain proprietary material belonging to others, raising concerns about potential intellectual property disputes."
    },
    {
      front: "Accuracy and Bias:",
      back: "Generative AI tools may produce outputs with biases or inaccuracies stemming from the data sources powering them."
    },
    {
      front: "Compliance:",
      back: "Responsible AI use ensures adherence to legal, ethical, and organizational standards."
    }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Container sx={{ py: 2, margin: '20px', maxWidth: '70% !important', padding: '0 2rem' }}>
        <Typography variant="h4" gutterBottom>
          Module 4: Responsible AI Use
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          4.1 Why Policy Matters: The Risks of AI Use
        </Typography>
        <Typography variant="h6" paragraph sx={{ color: '#FFB500' }}>
          Using AI irresponsibly can pose significant risks
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          {riskCards.map((card, index) => (
            <Box key={index}>
              <FlipCard
                frontContent={card.front}
                backContent={card.back}
                sx={{
                  width: 300,
                  height: 250,
                  margin: 2
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          4.2 AI Policy Compliance Guide
        </Typography>
        <PolicySection />
      </Box>
    </Container>
    </Box>
  );
};

const PolicySection = () => {
  const [completedSections, setCompletedSections] = useState([]);
  const [expandedPanel, setExpandedPanel] = useState(false);

  const principles = [
    {
      id: 0,
      title: "Trust but verify.",
      icon: "✓",
      content: (
        <>
          <Box sx={{}}>
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem',
              color: 'primary.main',
              fontWeight: 500
            }}>
              AI tools are powerful but not without flaws. To ensure responsible use, always verify information and guard against manipulation.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper elevation={0} sx={{ 
              p: 2.5,
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: 2
            }}>
              <Typography variant="subtitle1" sx={{ 
                fontWeight: 600,
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 2
              }}>
                <Box sx={{ 
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem'
                }}>1</Box>
                Accuracy and Misinformation
              </Typography>
              <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1,
                  mb: 2
                }}>
                  Verify all facts and claims. AI tools can fabricate responses ("hallucination"). Always cross-check outputs with reliable, independent sources.
                </Typography>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1
                }}>
                  Be mindful that AI-generated outputs can reflect biases in the training data. Critically evaluate the information to avoid spreading misinformation.
                </Typography>
              </Box>
            </Paper>

            <Paper elevation={0} sx={{ 
              p: 2.5,
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: 2
            }}>
              <Typography variant="subtitle1" sx={{ 
                fontWeight: 600,
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 2
              }}>
                <Box sx={{ 
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem'
                }}>2</Box>
                Reviewing Translations and Code
              </Typography>
              <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1,
                  mb: 2
                }}>
                  Translated content: Confirm accuracy in context, tone, dialect, and regional nuances. Follow the established translation validation process in your division.
                </Typography>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1
                }}>
                  Generated code: Review AI-generated code thoroughly to ensure it does not introduce vulnerabilities exploitable by threat actors.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </>
      ),
      quiz: {
        question: "What should you do before using AI-generated content?",
        options: [
          { id: 'a', text: "Use it immediately", correct: false },
          { id: 'b', text: "Verify its accuracy with reliable sources", correct: true },
          { id: 'c', text: "Share it with others", correct: false }
        ]
      }
    },
    {
      id: 1,
      title: "Guard against manipulation.",
      icon: "🛡️",
      content: (
        <>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            3. Information Bias
          </Typography>
          <Typography variant="body1" paragraph>
            Evaluate outputs for unintentional bias or favoritism toward a specific viewpoint. Make sure the content is balanced and fair.
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold' }}>
            4. Authenticity and Brand Compliance
          </Typography>
          <Typography variant="body1" paragraph>
            Customize AI outputs to align with CompanyX's standards.
          </Typography>
          <Typography variant="body1" paragraph>
            Public AI recognition tools can identify AI-generated text, so personalization is crucial.
          </Typography>
          <Typography variant="body1" paragraph>
            All content must be brand-compliant, as every employee represents CompanyX.
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold' }}>
            5. Prohibited Uses
          </Typography>
          <Typography variant="body1" paragraph>
            Do not use AI tools to evaluate an individual's performance or quality.
            For related concerns or legal considerations, consult your HR Business Partner.
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold' }}>
            6. Legal and Data Protection
          </Typography>
          <Typography variant="body1" paragraph>
            If using AI software for automated decision-making or processes involving profiling, ensure compliance with data protection regulations. A Data Protection Impact Assessment (DPIA) may be required.
          </Typography>
        </>
      ),
      quiz: {
        question: "What's a key consideration when using AI-generated content?",
        options: [
          { id: 'a', text: "Use it without modification", correct: false },
          { id: 'b', text: "Evaluate for bias and ensure brand compliance", correct: true },
          { id: 'c', text: "Share it immediately", correct: false }
        ]
      }
    },
    {
      id: 2,
      title: "Protect your information.",
      icon: "🔒",
      content: "Be cautious about sharing personal or confidential information with AI tools.",
      quiz: {
        question: "What should you do to protect your information when using AI?",
        options: [
          { id: 'a', text: "Share everything", correct: false },
          { id: 'b', text: "Only share necessary information", correct: true },
          { id: 'c', text: "Never share any information", correct: false }
        ]
      }
    },
    {
      id: 3,
      title: "Never input proprietary company information.",
      icon: "⚠️",
      content: "Avoid using AI tools to input or generate proprietary company information.",
      quiz: {
        question: "Why should you avoid using AI to input proprietary company information?",
        options: [
          { id: 'a', text: "AI is always accurate", correct: false },
          { id: 'b', text: "AI can be used to generate accurate information", correct: false },
          { id: 'c', text: "AI can be used to generate inaccurate information", correct: true },
          { id: 'd', text: "AI is too complex", correct: false }
        ]
      }
    }
  ];

  const handleSectionComplete = (sectionId) => {
    setCompletedSections(prev => [...prev, sectionId]);
  };

  const isLocked = (sectionId) => {
    if (sectionId === 0) return false;
    return !completedSections.includes(sectionId - 1);
  };

  return (
    <Box sx={{ mt: 4 }}>
      {principles.map((principle) => (
        <Accordion
          key={principle.id}
          expanded={expandedPanel === principle.id}
          onChange={() => !isLocked(principle.id) && setExpandedPanel(principle.id)}
          disabled={isLocked(principle.id)}
          sx={{
            mb: 2,
            '&.Mui-disabled': {
              bgcolor: 'grey.100'
            }
          }}
        >
          <AccordionSummary
            expandIcon={isLocked(principle.id) ? <LockIcon /> : <ExpandMoreIcon />}
            sx={{
              '&.Mui-disabled': {
                opacity: 0.7
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h6">{principle.icon}</Typography>
              <Typography variant="h6">{principle.title}</Typography>
              {completedSections.includes(principle.id) && (
                <CheckCircleIcon color="success" sx={{ ml: 2 }} />
              )}
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body1" paragraph>
                {principle.content}
              </Typography>
              <QuizSection 
                quiz={principle.quiz}
                onComplete={() => handleSectionComplete(principle.id)}
                isCompleted={completedSections.includes(principle.id)}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

const QuizSection = ({ quiz, onComplete, isCompleted }) => {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setShowResult(true);
    if (quiz.options.find(opt => opt.id === selected)?.correct) {
      onComplete();
    }
  };

  const handleRetry = () => {
    setSelected(null);
    setShowResult(false);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="subtitle1" gutterBottom>
        Quick Check:
      </Typography>
      <Typography variant="body1" gutterBottom>
        {quiz.question}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        {quiz.options.map((option) => (
          <Button
            key={option.id}
            variant={selected === option.id ? "contained" : "outlined"}
            onClick={() => !showResult && setSelected(option.id)}
            sx={{ 
              justifyContent: 'flex-start',
              backgroundColor: showResult && selected === option.id ? 
                (option.correct ? 'success.light' : 'error.light') : 
                undefined
            }}
            disabled={showResult && selected !== option.id}
          >
            {option.text}
          </Button>
        ))}
      </Box>
      {!showResult && selected && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Submit Answer
        </Button>
      )}
      {showResult && !isCompleted && (
        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
          <Alert severity="error" sx={{ flex: 1 }}>
            Incorrect. Please try again.
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
      {showResult && isCompleted && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Correct! You can now proceed to the next section.
        </Alert>
      )}
    </Box>
  );
};

export default Module4;
