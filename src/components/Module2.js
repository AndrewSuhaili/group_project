import React, { useState } from 'react';
import { Container, Typography, Box, Tabs, Tab, Paper } from '@mui/material';
import FlipCard from './FlipCard';
import ToolSelectionMultiQuestion from './ToolSelectionMultiQuestion';
import ToolComparisonDetails from './ToolComparisonDetails';
import DragAndDropOrder from './DragAndDropOrder';

const Module2 = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (e, newValue) => {
    setTabIndex(newValue);
  };

  // Expanded data for AI tools comparison (section 2.3)
  const aiToolsData = [
    {
      name: 'ChatGPT',
      primaryUse: 'Conversational AI and creative writing',
      capabilities: 'Generates text, answers queries, writes essays, and more.',
      limitations: 'May sometimes produce inaccurate responses.',
      example: 'Drafting blog posts, generating creative ideas, customer support.',
      moreDetails: 'ChatGPT is built on a large language model that leverages deep learning to produce human-like text. It can be integrated with various platforms and has applications in content creation, customer service, and educational tutoring. Users can experiment with prompt engineering to get better results.',
    },
    {
      name: 'Google Bard',
      primaryUse: 'Idea generation and content summarization',
      capabilities: 'Summarizes texts, generates creative ideas, and assists with content creation.',
      limitations: 'Accuracy is still evolving and may vary.',
      example: 'Brainstorming creative concepts, summarizing long documents, language translation support.',
      moreDetails: 'Google Bard uses advanced algorithms to analyze input data and provide concise, creative summaries and ideas. It is designed to complement human creativity and is constantly updated with new data sources. Bard is particularly useful in creative brainstorming sessions.',
    },
    {
      name: 'Microsoft Copilot',
      primaryUse: 'Productivity within Microsoft 365',
      capabilities: 'Assists in drafting documents, summarizing emails, and generating reports.',
      limitations: 'Limited to the Microsoft ecosystem and requires a subscription.',
      example: 'Creating reports in Word, analyzing data in Excel, summarizing email threads in Outlook.',
      moreDetails: 'Microsoft Copilot is deeply integrated into Microsoft Office tools, providing contextual assistance based on user input and historical data. It enhances productivity by automating routine tasks and offering intelligent suggestions. Its integration with the Microsoft ecosystem allows seamless collaboration and workflow management.',
    },
    {
      name: 'Copilot',
      primaryUse: 'Coding assistance and developer productivity',
      capabilities: 'Provides code suggestions, error detection, and auto-completion.',
      limitations: 'Sometimes produces incorrect suggestions and depends on context.',
      example: 'Assisting with code generation, debugging, and learning new programming patterns.',
      moreDetails: 'Copilot is designed to help developers write code faster by understanding natural language descriptions and converting them into code snippets. It learns from vast amounts of public code to provide relevant suggestions. This tool is particularly helpful for prototyping and overcoming coding blocks.',
    },
  ];

  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom>
        Module 2: Chatbots and Assistants
      </Typography>

      {/* Section 2.1: Chatbots and Assistants (Visual Only) */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          2.1 Chatbots and Assistants
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <FlipCard frontContent="Task Execution" backContent="Automates repetitive tasks like scheduling and email drafting." />
          <FlipCard frontContent="Prompt-Driven Outputs" backContent="Generates responses based on user inputs." />
          <FlipCard frontContent="Interactive Responses" backContent="Engages in dynamic conversation to assist users." />
        </Box>
      </Box>

      {/* Section 2.2: What Else Can AI Do? (Visual Only) */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          2.2 What Else Can AI Do?
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <FlipCard frontContent="Predictive Analytics" backContent="Analyzes historical data to forecast trends." />
          <FlipCard frontContent="Process Optimisation" backContent="Streamlines workflows by automating repetitive tasks." />
          <FlipCard frontContent="Document & Image Analysis" backContent="Extracts insights from unstructured data." />
        </Box>
      </Box>

      {/* Section: Interactive Multi-Select Question */}
      <Box sx={{ my: 4 }}>
        <ToolSelectionMultiQuestion />
      </Box>

      {/* Section 2.3: Comparing AI Tools (Expanded Interactive Section) */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          2.3 Comparing AI Tools
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          Explore each tool below. Click on each tab to view detailed information, interact with additional details, and learn more about each tool.
        </Typography>
        <Tabs value={tabIndex} onChange={handleTabChange} centered textColor="primary" indicatorColor="primary">
          {aiToolsData.map((tool, idx) => (
            <Tab key={idx} label={tool.name} />
          ))}
        </Tabs>
        <Paper elevation={4} sx={{ p: 3, mt: 2 }}>
          <ToolComparisonDetails tool={aiToolsData[tabIndex]} />
        </Paper>
      </Box>

      {/* Section 2.4: Drag & Drop Ordering Exercise (Now at the bottom) */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          2.4 Arrange the AI Workflow
        </Typography>
        <DragAndDropOrder />
      </Box>
    </Container>
  );
};

export default Module2;


