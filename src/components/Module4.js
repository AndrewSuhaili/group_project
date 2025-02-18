import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Accordion, AccordionSummary, AccordionDetails, Button, Alert } from '@mui/material';
import ProgressBar from './ProgressBar';
import FlipCard from './FlipCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AISecurityQuiz from './AISecurityQuiz';
import DragAndDropMatch from './DragAndDropMatch';

const safetyTerms = [
  {
    id: 1,
    text: "Drafting an email response to a client.",
    definition: "Review tone, accuracy, and formatting before sending."
  },
  {
    id: 2,
    text: "Translating a company document into another language.",
    definition: "Verify translation accuracy for context, tone, and regional nuances."
  },
  {
    id: 3,
    text: "Evaluating an employee's performance using ChatGPT.",
    definition: "DO NOT DO THIS. Consult your HR Business Partner instead."
  },
  {
    id: 4,
    text: "Generating a report summary based on proprietary company metrics.",
    definition: "Replace proprietary data with placeholders or generic examples."
  },
  {
    id: 5,
    text: "Asking for advice on handling a specific customer complaint about a product.",
    definition: "Remove identifying details or sensitive product information."
  }
];

const Module4 = () => {
  const [moduleProgress, setModuleProgress] = useState(0);
  const riskCards = [
    {
      front: "Data Privacy Breach:",
      back: "Information entered into AI tools could become public, leading to potential violations of data protection regulations and Stryker policies on safeguarding personal and confidential information."
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
      <Container sx={{ py: 2, margin: '20px', maxWidth: '80% !important', padding: '0 2rem' }}>
        <Typography variant="h4" gutterBottom>
          Module 4: Responsible AI Use
      </Typography>
        <Box sx={{ 
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 1000,
          paddingY: 2
        }}>
          <ProgressBar progress={moduleProgress} label="Module 4 Progress" />
        </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          4.1 Why Policy Matters: The Risks of AI Use
        </Typography>
        <Typography variant="h6" paragraph sx={{ color: '#FFB500' }}>
          Using AI irresponsibly can pose significant risks
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center',
          gap: 2,
          width: '100%'
        }}>
          {riskCards.map((card, index) => (
            <FlipCard
              key={index}
              frontContent={card.front}
              backContent={card.back}
              sx={{
                margin: 1
              }}
            />
          ))}
        </Box>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          4.2 AI Policy Compliance Guide
        </Typography>
        <PolicySection setModuleProgress={setModuleProgress} />
      </Box>
    </Container>
    </Box>
  );
};

const PolicySection = ({ setModuleProgress }) => {
  const [completedSections, setCompletedSections] = useState([]);
  const [expandedPanel, setExpandedPanel] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [knowledgeCheckCompleted, setKnowledgeCheckCompleted] = useState(false);

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
          <Box sx={{}}>
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem',
              color: 'primary.main',
              fontWeight: 500
            }}>
              AI tools can be manipulated to produce biased or misleading outputs. Always evaluate content for fairness and accuracy.
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
                Information Bias and Brand Compliance
              </Typography>
              <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1,
                  mb: 2
                }}>
                  Evaluate outputs for unintentional bias or favoritism toward a specific viewpoint. Make sure the content is balanced and fair.
                </Typography>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1
                }}>
                  Customize AI outputs to align with Stryker's standards. All content must be brand-compliant, as every employee represents Stryker.
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
                Legal and Data Protection
              </Typography>
              <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1,
                  mb: 2
                }}>
                  Do not use AI tools to evaluate an individual's performance or quality. For related concerns or legal considerations, consult your HR Business Partner.
                </Typography>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1
                }}>
                  If using AI software for automated decision-making or processes involving profiling, ensure compliance with data protection regulations. A Data Protection Impact Assessment (DPIA) may be required.
                </Typography>
              </Box>
            </Paper>
          </Box>
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
      content: (
        <>
          <Box sx={{}}>
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem',
              color: 'primary.main',
              fontWeight: 500
            }}>
              Protecting sensitive information is crucial when using AI tools. Be mindful of what you share and follow security protocols.
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
                Confidential Information Protection
              </Typography>
              <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1,
                  mb: 2
                }}>
                  Never input confidential company details like product specifications, financial data, or internal documents into AI tools.
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
                Risk Awareness
              </Typography>
              <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1
                }}>
                  Sharing such information could result in data breaches or the compromise of intellectual property.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </>
      ),
      quiz: {
        question: "What should you do to protect your information when using AI?",
        options: [
          { id: 'a', text: "Share everything", correct: false },
          { id: 'c', text: "Never share any information", correct: false },
          { id: 'b', text: "Only share necessary information", correct: true }
        ]
      }
    },
    {
      id: 3,
      title: "Maintain privacy in AI interactions.",
      icon: "🔐",
      content: (
        <>
          <Box sx={{}}>
            <Typography variant="body1" paragraph sx={{ 
              fontSize: '1.1rem',
              color: 'primary.main',
              fontWeight: 500
            }}>
              Privacy is crucial when interacting with AI tools. Use privacy-friendly practices and manage settings appropriately.
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
                Privacy-Friendly Practices
              </Typography>
              <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1,
                  mb: 2
                }}>
                  Use generic examples or placeholders when crafting AI prompts to avoid exposing sensitive data.
                </Typography>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1
                }}>
                  Example: Instead of "What should I do if a client from X company raises this issue with our Y product?" use "What should I do if a customer raises a product issue?"
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
                Privacy Settings Management
              </Typography>
              <Box sx={{ pl: 4 }}>
                <Typography variant="body1" paragraph sx={{ 
                  backgroundColor: '#f5f5f5',
                  p: 2,
                  borderRadius: 1
                }}>
                  Turn off features like "chat history and training" in AI tools to limit data retention and storage.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </>
      ),
      quiz: {
        question: "What's the best practice for maintaining privacy when using AI tools?",
        options: [
            { id: 'b', text: "Use generic examples and manage privacy settings", correct: true },
          { id: 'a', text: "Use specific company and client names", correct: false },
          { id: 'c', text: "Share all details for better results", correct: false }
        ]
      }
    }
  ];

  const handleSectionComplete = (sectionId) => {
    setModuleProgress(prev => prev + 15);
    setCompletedSections(prev => [...prev, sectionId]);
  };

  const handleQuizComplete = () => {
    setModuleProgress(prev => prev + 20);
    setQuizCompleted(true);
  };

  const handleKnowledgeCheckComplete = () => {
    setKnowledgeCheckCompleted(true);
    setModuleProgress(100);
  };

  const isLocked = (sectionId) => {
    if (sectionId === 0) return false;
    return !completedSections.includes(sectionId - 1);
  };

  const allSectionsCompleted = principles.every(p => completedSections.includes(p.id));

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

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#FFB500' }}>
          Checkpoint Quiz
        </Typography>
        
        {!allSectionsCompleted ? (
          <Paper 
            sx={{ 
              p: 3, 
              border: '1px solid #e0e0e0', 
              borderRadius: 2,
              bgcolor: 'grey.100',
              opacity: 0.7,
              position: 'relative'
            }}
          >
            <Box sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2,
              zIndex: 2
            }}>
              <LockIcon sx={{ fontSize: 40, color: 'grey.500' }} />
              <Typography variant="body1" color="grey.600">
                Complete all sections above to unlock the quiz
              </Typography>
            </Box>
            <Box sx={{ 
              filter: 'blur(3px)',
              pointerEvents: 'none',
              userSelect: 'none'
            }}>
              <AISecurityQuiz onComplete={handleQuizComplete} />
            </Box>
          </Paper>
        ) : (
          <AISecurityQuiz onComplete={handleQuizComplete} />
        )}
      </Box>


      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#FFB500' }}>
          Knowledge Check
        </Typography>
        <Typography variant="body1" paragraph>
          Match each AI use case with its appropriate safety precaution.
        </Typography>
        {!quizCompleted ? (
          <Paper 
            sx={{ 
              p: 3, 
              border: '1px solid #e0e0e0', 
              borderRadius: 2,
              bgcolor: 'grey.100',
              opacity: 0.7,
              position: 'relative'
            }}
          >
            <Box sx={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2,
              zIndex: 2
            }}>
              <LockIcon sx={{ fontSize: 40, color: 'grey.500' }} />
              <Typography variant="body1" color="grey.600">
                Complete the Checkpoint Quiz to unlock
              </Typography>
            </Box>
            <Box sx={{ 
              filter: 'blur(3px)',
              pointerEvents: 'none',
              userSelect: 'none'
            }}>
              <DragAndDropMatch 
                terms={safetyTerms} 
                leftColumnTitle="Use Cases"
                rightColumnTitle="Safety Precautions"
                onComplete={handleKnowledgeCheckComplete}
              />
            </Box>
          </Paper>
        ) : (
          <DragAndDropMatch 
            terms={safetyTerms} 
            leftColumnTitle="Use Cases"
            rightColumnTitle="Safety Precautions"
            onComplete={handleKnowledgeCheckComplete}
          />
        )}

        {quizCompleted && knowledgeCheckCompleted && (
        <Alert severity="success" sx={{ mt: 4 }}>
          Congratulations! You've completed the AI Policy Compliance Guide.
        </Alert>
      )}
      </Box>
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
