import React from 'react';
import UserInterface from './UserInterface';
import '../stylesheets/styles.css';
import ResponsiveAppBar from './NavBar.jsx';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Faves from './Faves.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#0e5423',
          },
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes>
          <Route path="favorites" element={ <Faves/> } />
        </Routes>
      <UserInterface />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
