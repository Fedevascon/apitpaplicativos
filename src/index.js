import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffd700', // Amarillo brillante como color principal
    },
    background: {
      default: '#1c1c1c', // Fondo oscuro
    },
    text: {
      primary: '#fff', // Texto blanco
    },
  },
  typography: {
    fontFamily: "'Get Schwifty', cursive",
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#fff', // Cambiar el color del texto principal del ListItemText
        },
        secondary: {
          color: '#888', // Cambiar el color del texto secundario del ListItemText
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s', // Agregar transición de color de fondo
          '&:hover': {
            backgroundColor: '#444', // Cambiar el color de fondo al pasar el mouse
            cursor: 'pointer',
          },
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
