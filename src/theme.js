// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB81C', // Stryker golden/yellow
    },
    secondary: {
      main: '#FFFFFF', // White background
    },
    text: {
      primary: '#000000', // Black text
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    // Headings based on our initial approximations:
    h1: { fontSize: '36px', fontWeight: 700 }, // e.g., for large statement text
    h2: { fontSize: '32px', fontWeight: 700 },
    h3: { fontSize: '30px', fontWeight: 700 }, // main headings (28-32px range)
    h4: { fontSize: '28px', fontWeight: 700 },
    // Body text
    body1: { fontSize: '16px', lineHeight: 1.5 },
    // Button text
    button: { fontSize: '14px', textTransform: 'uppercase', fontWeight: 600 },
  },
});

export default theme;



