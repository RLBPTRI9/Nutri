import React from 'react';
import GetIngredients from './GetIngredients.jsx';
import AddAllergy from './AddAllergy.jsx';
import '../stylesheets/styles.css';
import ResponsiveAppBar from './NavBar.jsx';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <AddAllergy />
      <GetIngredients />
    </ThemeProvider>
  );
}

export default App;
