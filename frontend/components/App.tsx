import React from 'react';
import Root from './routes/Root';
import UserInterface from './UserInterface';
import SearchRecipes from './routes/SearchRecipes';
import '../stylesheets/styles.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import LoginPage from './LoginPage';
import Signup from './Signup';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Inventory from './routes/Inventory';


function App() {
  //setting up React Router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,

      children: [
        {
          path: "/",
          element: <Navigate to="/home" />
        },
        {
          path: "/home",
          element: <UserInterface />,
        },
        {
          path: "/recipes",
          element: <SearchRecipes/>,
        },
        {
          path:"/inventory",
          element: <Inventory/>,
        },
      ],
    },
    {
      path: "/signup",
      element: <Signup/>,
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
      <RouterProvider router={router} />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
