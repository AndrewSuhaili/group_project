// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--body-bg)',
        borderTop: '1px solid #ccc',
        py: 2,
        mt: 4,
        textAlign: 'center'
      }}
    >
      <Typography variant="body2" sx={{ color: 'var(--text-color)' }}>
        © {new Date().getFullYear()} Stryker Corporation. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
