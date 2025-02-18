import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = { PRECAUTION: 'precaution' };

const matchPairs = [
  {
    useCase: "Drafting an email response to a client.",
    precaution: "Review tone, accuracy, and formatting before sending."
  },
  {
    useCase: "Translating a company document into another language.",
    precaution: "Verify translation accuracy for context, tone, and regional nuances."
  },
  {
    useCase: "Evaluating an employee's performance using ChatGPT.",
    precaution: "DO NOT DO THIS. Consult your HR Business Partner instead."
  },
  {
    useCase: "Generating a report summary based on proprietary company metrics.",
    precaution: "Replace proprietary data with placeholders or generic examples."
  },
  {
    useCase: "Asking for advice on handling a specific customer complaint about a product.",
    precaution: "Remove identifying details or sensitive product information."
  }
];

const DraggableItem = ({ text, type, isDropped }) => {
  const [{ opacity }, drag] = useDrag(() => ({
    type: ItemTypes.PRECAUTION,
    item: { text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  }));

  return (
    <Paper
      ref={drag}
      sx={{
        p: 2,
        mb: 2,
        cursor: 'move',
        opacity,
        backgroundColor: isDropped ? 'success.light' : 'background.paper',
        border: '1px solid',
        borderColor: isDropped ? 'success.main' : 'grey.300'
      }}
    >
      <Typography>{text}</Typography>
    </Paper>
  );
};

const DropTarget = ({ text, onDrop, isMatched }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PRECAUTION,
    drop: (item) => onDrop(text, item.text),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  return (
    <Paper
      ref={drop}
      sx={{
        p: 2,
        mb: 2,
        backgroundColor: isOver ? 'action.hover' : isMatched ? 'success.light' : 'grey.100',
        border: '2px dashed',
        borderColor: isOver ? 'primary.main' : isMatched ? 'success.main' : 'grey.300'
      }}
    >
      <Typography>{text}</Typography>
    </Paper>
  );
};

const UseCaseMatch = () => {
  const [matches, setMatches] = useState({});
  const [shuffledPrecautions] = useState(() => 
    [...matchPairs].map(pair => pair.precaution).sort(() => Math.random() - 0.5)
  );

  const handleDrop = (useCase, precaution) => {
    const newMatches = { ...matches, [useCase]: precaution };
    setMatches(newMatches);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Match the AI Use Cases with Their Safety Precautions
        </Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" gutterBottom>
              Safety Precautions
            </Typography>
            {shuffledPrecautions.map((precaution, index) => (
              <DraggableItem 
                key={index}
                text={precaution}
                isDropped={Object.values(matches).includes(precaution)}
              />
            ))}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" gutterBottom>
              Use Cases
            </Typography>
            {matchPairs.map((pair, index) => (
              <DropTarget
                key={index}
                text={pair.useCase}
                onDrop={handleDrop}
                isMatched={matches[pair.useCase] === pair.precaution}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </DndProvider>
  );
};

export default UseCaseMatch; 