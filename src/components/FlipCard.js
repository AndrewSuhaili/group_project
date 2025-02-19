// src/components/FlipCard.js
import React, { useState } from 'react';
import { Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled('div')(({ theme, sx }) => ({
  perspective: 1000,
  width: '23%',
  minWidth: '200px',
  aspectRatio: '1/1.2',
  margin: '1%',
  cursor: 'pointer',
  ...(sx || {})
}));

const CardInner = styled('div')(({ flipped }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
}));

const CardFace = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const CardBack = styled(CardFace)(({ theme }) => ({
  transform: 'rotateY(180deg)',
  backgroundColor: theme.palette.primary.light,
}));

function FlipCard({ frontContent, backContent, sx }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <CardContainer onClick={() => setFlipped(!flipped)} sx={sx}>
      <CardInner flipped={flipped}>
        <CardFace elevation={4}>
          <Typography variant="h6">{frontContent}</Typography>
        </CardFace>
        <CardBack elevation={4}>
          <Typography variant="body1">{backContent}</Typography>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
}

export default FlipCard;
