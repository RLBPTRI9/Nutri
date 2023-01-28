import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { loginAsync } from '../features/authSlice';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const usernameRef: any = useRef();
  const passwordRef: any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // console.log(username, name, email, password);

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const userData = {
      username: username,
      password: password,
    };
    //@ts-ignore
    dispatch(loginAsync(userData));

    clearFormValues();

    navigate('/home');
  };

  const clearFormValues = () => {
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  function Copyright(props: any) {
    return (
      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        {...props}>
        {'Copyright © '}
        <Link color='inherit' href='/login'>
          Nutri
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LocalDiningIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='username'
            name='username'
            autoComplete='username'
            inputRef={usernameRef}
            placeholder='e.g., HermanLovesSox123'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            placeholder='e.g., herman'
            inputRef={passwordRef}
            autoComplete='current-password'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
            </Grid>
            <Grid item>
              <Link href='/signup' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default LoginPage;
