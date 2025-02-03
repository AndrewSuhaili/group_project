import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

const ProgressBar = ({ progress, label }) => {
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const diff = progress - displayProgress;
    const increment = diff / 20;
    const interval = setInterval(() => {
      setDisplayProgress(prev => {
        const newVal = prev + increment;
        if ((increment > 0 && newVal >= progress) || (increment < 0 && newVal <= progress)) {
          clearInterval(interval);
          return progress;
        }
        return newVal;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <Box sx={{ width: '100%', my: 2 }}>
      <Typography variant="subtitle1" gutterBottom>{label}</Typography>
      <LinearProgress
        variant="determinate"
        value={displayProgress}
        sx={{ height: 10, borderRadius: 5, transition: 'width 0.5s ease-in-out' }}
      />
      <Typography variant="caption" display="block" align="right">
        {Math.round(displayProgress)}% complete
      </Typography>
    </Box>
  );
};

export default ProgressBar;


