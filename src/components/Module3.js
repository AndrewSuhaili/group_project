import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Stepper, Step, StepLabel, StepContent, Divider, IconButton } from '@mui/material';
import FlipCard from './FlipCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CaseStudy from './CaseStudy';
import AISecurityQuiz from './AISecurityQuiz';
import LockIcon from '@mui/icons-material/Lock';
import ReactPlayer from 'react-player';
import ChatGPTRecording from '../assets/ChatGPT Recording.mp4';
import ConversationDemo from '../assets/conversation.mp4';

const Module3 = () => {
  const [expandedSteps, setExpandedSteps] = useState([]);
  const [knowledgeCheckCompleted, setKnowledgeCheckCompleted] = useState(false);
  const [expandedTextGenCases, setExpandedTextGenCases] = useState([]);

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

  const handleKnowledgeCheckComplete = () => {
    setKnowledgeCheckCompleted(true);
  };

  const handleTextGenCaseClick = (index) => {
    setExpandedTextGenCases(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const textGenerationCases = [
    {
      title: "Region-Specific Content Adaptation",
      scenario: "A marketing intern uses AI to rewrite website product pages to meet region-specific regulatory and guidelines and local concerns.",
      prompt: "Rewrite this website content, removing all claims in line with Australian regulatory guidelines: [insert text]"
    },
    {
      title: "Internal Communications",
      scenario: "An internal communications intern uses AI to draft a Hub post promoting uptake of a new intern led \"AI in your workplace\" learning resource.",
      prompt: "Write an internal story highlight a new employee AI training program and note the following details [insert details/content]. Use a professional and polished tone"
    }
  ];

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

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            3.3 Business Use Cases: Summarisation and Research
          </Typography>
          <Typography variant="body1" paragraph>
            AI can streamline the process of gathering, summarising, and synthesising information. 
            AI can locate relevant resources quickly and extract key insights from large individual 
            sources of data or a wide range of sources.
          </Typography>
          <Typography variant="h6" gutterBottom>
          Have a look at the following video to see how AI can be used to summarise and digest a large report using different prompting techniques.
          </Typography>
          <Box sx={{ maxWidth: '800px', margin: '20px auto' }}>
            <ReactPlayer
              url={ChatGPTRecording}
              width="100%"
              height="auto"
              controls={true}
              pip={true}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>          
          <AISecurityQuiz 
            title="How does AI enhance the research process?"
            questions={[
              {
                id: 'A',
                text: 'By generating reports tailored to specific stakeholders',
                correct: false
              },
              {
                id: 'B',
                text: 'By automating the creation of promotional emails',
                correct: false
              },
              {
                id: 'C',
                text: 'By summarising large volumes of information, from length or disparate sources, efficiently',
                correct: true
              },
              {
                id: 'D',
                text: 'By visualising customer trends in charts',
                correct: false
              }
            ]}
            successMessage="Correct! AI excels at processing and summarizing large amounts of information quickly and efficiently."
            errorMessage="Incorrect. Think about AI's ability to process and analyze large volumes of data."
            onComplete={handleKnowledgeCheckComplete}
          />
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            3.4 Conversational AI Interaction
          </Typography>
          <Typography variant="body1" paragraph>
            AI models can engage in dynamic conversations, allowing users to ask follow-up questions, 
            seek clarification, and explore topics in depth. This interactive capability makes them 
            valuable tools for brainstorming, problem-solving, and learning.
          </Typography>
          
          <Typography variant="h6" gutterBottom>
          Here's an example where someone wants to prepare for a meeting by practicing on the spot questions.
          They have specified what perspective they want the AI to take (e.g. a leadership team member), uploaded some information about their
          project/presentation and requested a mock question time.
          </Typography>
          
          <Box sx={{ 
            maxWidth: '800px', 
            margin: '20px auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <ReactPlayer
              url={ConversationDemo} // You'll need to import this video asset
              width="100%"
              height="auto"
              controls={true}
              pip={true}
            />
          </Box>
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            3.5 Text Generation
          </Typography>
          <Typography variant="body1" paragraph>
            AI can generate text for written or verbal communications such as emails, reports, 
            speeches or presentations. It can tailor the tone and style to suit the audience 
            or purpose, saving time and ensuring the correct consistency, punctuation and spelling.
          </Typography>
          
          <Stepper orientation="vertical" nonLinear>
            {textGenerationCases.map((useCase, index) => (
              <Step key={index} active={expandedTextGenCases.includes(index)}>
                <StepLabel
                  onClick={() => handleTextGenCaseClick(index)}
                  sx={{ cursor: 'pointer' }}
                  StepIconComponent={() => (
                    <IconButton
                      size="small"
                      sx={{
                        transform: expandedTextGenCases.includes(index) ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s'
                      }}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  )}
                >
                  <Typography variant="h6">{useCase.title}</Typography>
                </StepLabel>
                {expandedTextGenCases.includes(index) && (
                  <StepContent TransitionProps={{ unmountOnExit: true }}>
                    <Box sx={{ my: 2 }}>
                      <Typography variant="body1" paragraph>
                        {useCase.scenario}
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
                          {useCase.prompt}
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

        <Box sx={{ mt: 4 }}>
          {!knowledgeCheckCompleted ? (
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
                  Complete the previous quiz to unlock
                </Typography>
              </Box>
              <Box sx={{ 
                filter: 'blur(3px)',
                pointerEvents: 'none',
                userSelect: 'none'
              }}>
                <AISecurityQuiz 
                  title="Which of the following represents a key use of text generation in the workplace?"
                  questions={[
                    {
                      id: 'A',
                      text: 'Generating personalised content tailored to specific audiences',
                      correct: true
                    },
                    {
                      id: 'B',
                      text: 'Cleaning datasets before analysis',
                      correct: false
                    },
                    {
                      id: 'C',
                      text: 'Visualising data trends using graphs',
                      correct: false
                    },
                    {
                      id: 'D',
                      text: 'Automating data entry tasks',
                      correct: false
                    }
                  ]}
                  successMessage="Correct! AI text generation excels at creating customized content for different audiences and purposes."
                  errorMessage="Incorrect. Think about how AI can help create different types of written content."
                  onComplete={handleKnowledgeCheckComplete}
                />
              </Box>
            </Paper>
          ) : (
            <AISecurityQuiz 
              title="Which of the following represents a key use of text generation in the workplace?"
              questions={[
                {
                  id: 'A',
                  text: 'Generating personalised content tailored to specific audiences',
                  correct: true
                },
                {
                  id: 'B',
                  text: 'Cleaning datasets before analysis',
                  correct: false
                },
                {
                  id: 'C',
                  text: 'Visualising data trends using graphs',
                  correct: false
                },
                {
                  id: 'D',
                  text: 'Automating data entry tasks',
                  correct: false
                }
              ]}
              successMessage="Correct! AI text generation excels at creating customized content for different audiences and purposes."
              errorMessage="Incorrect. Think about how AI can help create different types of written content."
              onComplete={handleKnowledgeCheckComplete}
            />
          )}
        </Box>

      </Container>
    </Box>
  );
};

export default Module3; 