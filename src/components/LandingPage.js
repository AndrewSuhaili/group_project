// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Grid, 
  Card, 
  CardActionArea, 
  CardContent, 
  Typography, 
  Box,
  Link,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText 
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import SecurityIcon from '@mui/icons-material/Security';
import PolicyIcon from '@mui/icons-material/Policy';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HelpIcon from '@mui/icons-material/Help';
import WarningIcon from '@mui/icons-material/Warning';

function LandingPage() {
  const navigate = useNavigate();
  const modules = [
    { id: 1, title: 'Module 1: Introduction to AI' },
    { id: 2, title: 'Module 2: Chatbots and Assistants' },
    { id: 3, title: 'Module 3: Prompts and chatbot use cases' },
    { id: 4, title: 'Module 4: Responsible AI Use' },
  ];

  const resources = [
    {
      title: "Code of Conduct",
      link: "https://stryker.sharepoint.com/sites/CodeofConduct",
      icon: <PolicyIcon color="primary" />
    },
    {
      title: "Acceptable Use Policy",
      link: "https://stryker.sharepoint.com/sites/StrykerPolicyPortal/PortalDocuments/Forms/Expansion%20View.aspx?FilterField1=Business%5Fx0020%5FFunction&FilterValue1=Information%20Technology",
      icon: <SecurityIcon color="primary" />
    },
    {
      title: "AI Guidance for Employees",
      link: "https://stryker.sharepoint.com/sites/home/News%20Documents/Forms/AllItems.aspx",
      icon: <ArticleIcon color="primary" />
    },
    {
      title: "Data Protection Impact Assessment (DPIA)",
      link: "https://stryker.sharepoint.com/sites/GlobalDataPrivacyGroup/SitePages/Privacy-Assessments.aspx",
      icon: <AssessmentIcon color="primary" />
    }
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Stryker AI Training
      </Typography>
      
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {modules.map((mod) => (
          <Grid item xs={12} sm={6} md={3} key={mod.id}>
            <Card 
              elevation={3} 
              sx={{ 
                borderRadius: 3,
                minHeight: '220px',
                display: 'flex',
                background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)'
                }
              }}
            >
              <CardActionArea 
                onClick={() => navigate(`/module${mod.id}`)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  p: 4,
                  height: '100%',
                  '&:hover': {
                    '& .MuiTypography-root': {
                      color: 'primary.main'
                    }
                  }
                }}
              >
                <CardContent>
                  <Typography 
                    variant="h6" 
                    align="center"
                    sx={{ 
                      fontSize: '1.5rem',
                      lineHeight: 1.4,
                      fontWeight: 500,
                      transition: 'color 0.3s ease-in-out',
                      color: 'text.primary',
                      mb: 1
                    }}
                  >
                    {mod.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ 
        mt: 4, 
        p: 4, 
        backgroundColor: '#f5f5f5', 
        borderRadius: 2,
        border: '1px solid #e0e0e0'
      }}>
        <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 3 }}>
          Important Resources
        </Typography>
        
        <List>
          {resources.map((resource, index) => (
            <ListItem key={index} sx={{ py: 1 }}>
              <ListItemIcon>
                {resource.icon}
              </ListItemIcon>
              <ListItemText>
                <Link 
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  {resource.title}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ 
          display: 'flex', 
          gap: 4,
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <HelpIcon color="primary" />
            <Typography>
              Need help? Contact{' '}
              <Link href="mailto:AI.questions@stryker.com">AI.questions@stryker.com</Link>
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WarningIcon color="error" />
            <Typography>
              Report suspicious activity to{' '}
              <Link href="mailto:informationsecurity@stryker.com">informationsecurity@stryker.com</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default LandingPage;
