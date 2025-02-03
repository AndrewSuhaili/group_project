// src/components/RatingSlider.js
import React, { useState } from 'react';
import { Slider, Box } from '@mui/material';

const RatingSlider = ({ initialValue = 50, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Box sx={{ width: '80%', mt: 2, mx: 'auto' }}>
      <Slider
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="rating-slider"
        valueLabelDisplay="auto"
        min={0}
        max={100}
      />
    </Box>
  );
};

export default RatingSlider;
