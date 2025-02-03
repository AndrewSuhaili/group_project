// src/contexts/ProgressContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  // Load saved progress from localStorage or use defaults.
  const storedProgress = JSON.parse(localStorage.getItem('moduleProgress')) || {
    module1: 0,
    module2: 0
  };

  const [progress, setProgress] = useState(storedProgress);

  useEffect(() => {
    localStorage.setItem('moduleProgress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (moduleKey, value) => {
    setProgress((prev) => ({ ...prev, [moduleKey]: value }));
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
