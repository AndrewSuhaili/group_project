import React, { useState } from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = { PROMPT: 'prompt' };

const promptTechniques = [
  { 
    id: 1,
    type: 'Persona',
    description: 'Assigning a specific role or perspective',
    example: 'You are a data analyst for our marketing team. Provide a summary...'
  },
  {
    id: 2,
    type: 'Delimiters',
    description: 'Using markers to distinguish text segments',
    example: 'Translate the text delimited by triple quotes to French...'
  },
  {
    id: 3,
    type: 'Step-by-Step',
    description: 'Breaking down complex tasks into steps',
    example: 'Step 1 - Read the text\nStep 2 - Provide feedback...'
  },
  {
    id: 4,
    type: 'Examples',
    description: 'Providing demonstration cases',
    example: 'Summarize the topic and mood of a piece of text...'
  }
];

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PROMPT,
    item: { id: item.id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() })
  }));

  return (
    <Paper
      ref={drag}
      sx={{
        p: 2,
        m: 1,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        backgroundColor: 'background.paper'
      }}
      elevation={3}
    >
      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
        "{item.example}"
      </Typography>
    </Paper>
  );
};

const DropZone = ({ technique, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PROMPT,
    drop: (item) => onDrop(item.id, technique.id),
    collect: (monitor) => ({ isOver: !!monitor.isOver() })
  }));

  return (
    <Paper
      ref={drop}
      sx={{
        p: 2,
        m: 1,
        border: isOver ? '2px dashed primary.main' : '1px solid #ddd',
        backgroundColor: isOver ? 'action.hover' : 'background.paper'
      }}
    >
      <Typography variant="subtitle1">{technique.type}</Typography>
      <Typography variant="body2">{technique.description}</Typography>
    </Paper>
  );
};

const DragAndDropPrompts = ({ onComplete }) => {
  const [matches, setMatches] = useState({});
  const [shuffledItems] = useState(() => [...promptTechniques].sort(() => Math.random() - 0.5));

  const handleDrop = (itemId, techniqueId) => {
    setMatches(prev => ({ ...prev, [itemId]: techniqueId }));
    
    // Check if all matches are correct
    const allCorrect = promptTechniques.every(t => 
      matches[t.id] === t.id || t.id === itemId && techniqueId === t.id
    );
    
    if (allCorrect && onComplete) {
      onComplete();
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          Match the Example Prompts with Their Techniques
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {shuffledItems.map((item) => (
              <DraggableItem key={item.id} item={item} />
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            {promptTechniques.map((tech) => (
              <DropZone key={tech.id} technique={tech} onDrop={handleDrop} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </DndProvider>
  );
}; 

export default DragAndDropPrompts;