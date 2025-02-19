// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import StrykerLogo from '../assets/Stryker_logo.png'; // Import the Stryker logo

const NavButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: 600,
  fontSize: '14px',
  letterSpacing: '0.1em',
  color: theme.palette.text.primary,
  marginRight: theme.spacing(2),
}));

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left side: Navigation links */}
        <Box>
          <NavButton onClick={() => navigate('/')}>Home</NavButton>
          {/* Add additional navigation buttons here if needed */}
        </Box>

        {/* Right side: Logo (clickable) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        >
          <Box
            component="img"
            src={StrykerLogo}
            alt="Stryker Logo"
            sx={{
              height: '50px',
              width: 'auto',
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
