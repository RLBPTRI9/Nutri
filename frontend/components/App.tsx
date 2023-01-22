import React from 'react';
import UserInterface from './UserInterface';
import '../stylesheets/styles.css';
import ResponsiveAppBar from './NavBar';
import LoginPage from './LoginPage';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

function App() {
  //setting up React Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home"/>
    },
    {
      path: "/home",
      element: <UserInterface />,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
  ]);

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
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
