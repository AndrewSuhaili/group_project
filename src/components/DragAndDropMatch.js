// src/components/DragAndDropMatch.js
import React, { useState } from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  TERM: 'term',
};

const DraggableTerm = ({ term }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TERM,
    item: { id: term.id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <Paper
      ref={drag}
      sx={{
        p: 1,
        m: 1,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
      elevation={3}
    >
      <Typography variant="body2">{term.text}</Typography>
    </Paper>
  );
};

const DropBox = ({ term, onMatch, onWrongDrop }) => {
  const [status, setStatus] = useState("default");

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.TERM,
    drop: (item) => {
      if (item.id === term.id) {
        setStatus("correct");
        onMatch(term.id);
      } else {
        setStatus("wrong");
        if (onWrongDrop) onWrongDrop();
        // After 0.5 seconds, revert the status to default
        setTimeout(() => {
          setStatus("default");
        }, 500);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // Set up the base style for the drop zone
  let style = {
    p: 2,
    m: 1,
    minHeight: 80,
    border: '1px dashed #ccc',
    transition: 'all 0.3s',
  };

  if (status === "correct") {
    style = { ...style, backgroundColor: "success.light", border: '2px solid green' };
  } else if (status === "wrong") {
    style = { ...style, backgroundColor: "error.light", border: '2px solid red', animation: 'shake 0.5s' };
  } else if (isOver && canDrop) {
    style = { ...style, backgroundColor: "info.light" };
  }

  return (
    <Paper ref={drop} sx={style} elevation={3}>
      <Typography variant="body2">{term.definition}</Typography>
      {status === "correct" && (
        <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: 'bold' }}>
          {term.text}
        </Typography>
      )}
    </Paper>
  );
};

const DragAndDropMatch = ({ terms, leftColumnTitle = "Key Terms", rightColumnTitle = "Definitions", onComplete }) => {
  const [matches, setMatches] = useState({});

  const handleMatch = (id) => {
    setMatches((prev) => ({ ...prev, [id]: true }));

    if (matches.length === terms.length) {
      console.log("All terms matched");
      onComplete();
    }
  };

  const handleWrongDrop = () => {
    // Optional: Handle wrong drop events
  };

  const termsWithStatus = terms.map((term) => ({
    ...term,
    matched: matches[term.id] || false,
  }));

  const availableTerms = termsWithStatus.filter((term) => !term.matched);

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Match the {leftColumnTitle} with Their {rightColumnTitle}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" align="center">
              {leftColumnTitle}
            </Typography>
            {availableTerms.map((term) => (
              <DraggableTerm key={term.id} term={term} />
            ))}
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="subtitle1" align="center">
              {rightColumnTitle}
            </Typography>
            <Grid container>
              {termsWithStatus.map((term) => (
                <Grid item xs={12} sm={6} key={term.id}>
                  <DropBox term={term} onMatch={handleMatch} onWrongDrop={handleWrongDrop} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="subtitle1">
            Matched {Object.keys(matches).length} out of {terms.length} items
          </Typography>
        </Box>
      </Box>
    </DndProvider>
  );
};

export default DragAndDropMatch;

