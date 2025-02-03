// src/components/ToolComparisonDetails.js
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const ToolComparisonDetails = ({ tool, onComplete }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (!expanded && onComplete) {
      onComplete();
    }
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Typography variant="subtitle1">Primary Use:</Typography>
      <Typography variant="body2">{tool.primaryUse}</Typography>

      <Typography variant="subtitle1" sx={{ mt: 1 }}>Capabilities:</Typography>
      <Typography variant="body2">{tool.capabilities}</Typography>

      <Typography variant="subtitle1" sx={{ mt: 1 }}>Limitations:</Typography>
      <Typography variant="body2">{tool.limitations}</Typography>

      <Typography variant="subtitle1" sx={{ mt: 1 }}>Example Use:</Typography>
      <Typography variant="body2">{tool.example}</Typography>

      <Box sx={{ mt: 2 }}>
        <Button variant="outlined" onClick={handleToggle}>
          {expanded ? 'Hide More Details' : 'Show More Details'}
        </Button>
      </Box>
      {expanded && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">{tool.moreDetails}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ToolComparisonDetails;

