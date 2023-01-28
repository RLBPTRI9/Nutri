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
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Inventory from './routes/Inventory';
import ErrorPage from './routes/ErrorPage';
import Favorites from './Favorites';

function App() {
  //setting up React Router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Navigate to='/home' />,
        },
        {
          path: '/home',
          element: <UserInterface />,
        },
        {
          path: '/recipes',
          element: <SearchRecipes />,
        },
        {
          path: '/inventory',
          element: <Inventory />,
        },
        {
          path: '/favorites',
          element: <Favorites />,
        },
      ],
    },
    {
      path: '/signup',
      element: <Signup />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
      errorElement: <ErrorPage />,
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
