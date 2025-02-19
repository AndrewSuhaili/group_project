import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Stepper, 
  Step, 
  StepLabel, 
  StepContent,
  Card,
  CardContent,
  IconButton,
  Collapse,
  Fade,
  Chip,
  Stack,
  Divider,
  Alert,
  Button
} from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CaseStudy = () => {
  const [expandedSteps, setExpandedSteps] = useState([0]);
  const [showComparison, setShowComparison] = useState(false);

  const handleStepClick = (index) => {
    setExpandedSteps(prev => {
      const newSteps = prev.includes(index) 
        ? prev.filter(step => step !== index) 
        : [...prev, index];
      
      // Automatically show comparison when opening the prompt comparison step
      if (index === 1) {
        setShowComparison(true);
      }
      return newSteps;
    });
  };

  const steps = [
    {
      label: 'The Scenario',
      content: (
        <Card variant="outlined" sx={{ color: 'primary.contrastText', mb: 2, width: '70%' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem' }}>
                Excel Macro Development Task
              </Typography>
              <Button 
                variant="outlined" 
                onClick={() => handleStepClick(0)}
                sx={{ ml: 2 }}
              >
                {expandedSteps.includes(0) ? 'Collapse' : 'Expand'} Scenario
              </Button>
            </Box>
            <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
              A user who has never written an Excel macro before needs help creating one that will:
            </Typography>
            <Stack spacing={1} sx={{ mt: 2, alignItems: 'flex-start' }}>
              {[
                'Copy data from "Sheet1" to "Sheet2"',
                'Only include rows where Column A contains "Complete"',
                'Preserve formatting',
                'Run with a button click'
              ].map((requirement, index) => (
                <Chip
                  key={index}
                  label={requirement}
                  icon={<CheckCircleIcon />}
                  sx={{ 
                    '& .MuiChip-label': { 
                      color: '#FFB500',
                      fontSize: '0.85rem'
                    },
                    '& .MuiChip-icon': { color: '#FFB500' }
                  }}
                />
              ))}
            </Stack>
          </CardContent>
        </Card>
      )
    },
    {
      label: 'Prompt Comparison',
      content: (
        <Box sx={{ width: '80%' }}>
          <Collapse in={showComparison}>
            <Stack spacing={2}>
              <Alert 
                severity="error"
                icon={<ErrorIcon fontSize="large" />}
                sx={{ 
                  '& .MuiAlert-message': { width: '100%' }
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem' }}>
                  Bad Prompt
                </Typography>
                <Card variant="outlined" sx={{ bgcolor: '#ffebee', mt: 1 }}>
                  <CardContent>
                    <Typography variant="body1" component="pre" sx={{ 
                      fontFamily: 'monospace',
                      fontSize: '0.85rem'
                    }}>
                      "Write a macro to copy completed rows to another sheet."
                    </Typography>
                  </CardContent>
                </Card>
                <Fade in={true} timeout={1000}>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" color="error" sx={{ fontSize: '0.9rem' }}>
                      Why it's ineffective:
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 1 }}>
                      {[
                        'Vague requirements',
                        'No sheet/column specifications',
                        'Undefined "completed rows"',
                        'No formatting instructions'
                      ].map((issue, index) => (
                        <ul>
                          <li>{issue}</li>
                        </ul>
                      ))}
                    </Stack>
                  </Box>
                </Fade>
              </Alert>

              <Alert 
                severity="success"
                icon={<LightbulbIcon fontSize="large" />}
                sx={{ 
                  '& .MuiAlert-message': { width: '100%' }
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem' }}>
                  Good Prompt
                </Typography>
                <Card variant="outlined" sx={{ bgcolor: '#f1f8e9', mt: 1 }}>
                  <CardContent>
                    <Typography variant="body1" component="pre" sx={{ 
                      fontFamily: 'monospace',
                      fontSize: '0.85rem'
                    }}>
                      {`I need an Excel VBA macro that:
1. Copies rows from 'Sheet1' to 'Sheet2'
2. Only if Column A contains "Complete"
3. Data starts from row 2 (headers in row 1)
4. Preserve formatting
5. Run when button clicked
6. Add clear comments`}
                    </Typography>
                  </CardContent>
                </Card>
                <Fade in={true} timeout={1000}>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" color="success.main" sx={{ fontSize: '0.9rem' }}>
                      Why it works:
                    </Typography>
                    <Stack spacing={1} sx={{ mt: 1 }}>
                      {[
                        'Clear objective',
                        'Specific locations',
                        'Defined criteria',
                        'Formatting requirements',
                        'Implementation details'
                      ].map((benefit, index) => (
                        <ul>
                          <li>{benefit}</li>
                        </ul>
                      ))}
                    </Stack>
                  </Box>
                </Fade>
              </Alert>
            </Stack>
          </Collapse>
        </Box>
      )
    }
  ];

  return (
    <Box sx={{ maxWidth: '100%' }}>
      <Stepper orientation="vertical" nonLinear>
        {steps.map((step, index) => (
          <Step key={index} active={expandedSteps.includes(index)}>
            <StepLabel
              onClick={() => handleStepClick(index)}
              sx={{ cursor: 'pointer' }}
            >
              <Typography variant="h6" sx={{ fontSize: '1.1rem' }}>
                {step.label}
              </Typography>
            </StepLabel>
            {expandedSteps.includes(index) && (
              <StepContent>
                {step.content}
                {index < steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={() => handleStepClick(index + 1)}
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 2 }}
                  >
                    Continue
                  </Button>
                )}
              </StepContent>
            )}
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default CaseStudy;