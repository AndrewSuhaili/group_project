import React, { useState } from 'react';
import { Box, Paper, Typography, Grid, Button } from '@mui/material';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = { STEP: 'step' };

const correctOrder = [
  { id: 1, text: 'Input Data' },
  { id: 2, text: 'Processing' },
  { id: 3, text: 'Output' },
  { id: 4, text: 'Learning' },
];

// Draggable step component
const DraggableStep = ({ step, index, moveStep }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.STEP,
    item: { index },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.STEP,
    hover: (item) => {
      if (item.index !== index) {
        moveStep(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <Paper
      ref={(node) => drag(drop(node))}
      sx={{
        p: 2,
        m: 1,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        textAlign: 'center',
      }}
      elevation={3}
    >
      <Typography variant="body1">{step.text}</Typography>
    </Paper>
  );
};

const DragAndDropOrder = ({ onComplete }) => {
  // Shuffle steps initially
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);
  const [steps, setSteps] = useState(shuffle([...correctOrder]));
  const [orderStatus, setOrderStatus] = useState("default"); // "default", "correct", "wrong"

  const moveStep = (fromIndex, toIndex) => {
    const updated = [...steps];
    const [removed] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, removed);
    setSteps(updated);
  };

  const checkOrder = () => {
    const isCorrect = steps.every((step, index) => step.id === correctOrder[index].id);
    if (isCorrect) {
      setOrderStatus("correct");
      if (onComplete) onComplete();
      // Optionally, keep the green border for a short while (e.g., 1.5 seconds)
    } else {
      setOrderStatus("wrong");
      // After 0.5 seconds, reset the orderStatus and re-shuffle the steps.
      setTimeout(() => {
        setSteps(shuffle([...correctOrder]));
        setOrderStatus("default");
      }, 1000);
    }
  };

  // Define container style based on orderStatus
  let containerStyle = {
    p: 2,
    transition: 'all 0.3s',
  };
  if (orderStatus === "correct") {
    containerStyle = {
      ...containerStyle,
      backgroundColor: "success.light",
      border: "2px solid green",
    };
  } else if (orderStatus === "wrong") {
    containerStyle = {
      ...containerStyle,
      backgroundColor: "error.light",
      border: "2px solid red",
      animation: 'shake 0.5s',
    };
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ my: 3 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Arrange the AI Workflow Steps in the Correct Order
        </Typography>
        <Grid container spacing={2} sx={{ justifyContent: 'center', ...containerStyle }}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={3} key={step.id}>
              <DraggableStep step={step} index={index} moveStep={moveStep} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Button variant="contained" color="primary" onClick={checkOrder}>
            Submit Order
          </Button>
        </Box>
      </Box>
    </DndProvider>
  );
};

export default DragAndDropOrder;
