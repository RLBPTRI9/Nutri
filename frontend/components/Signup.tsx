import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { registerAsync } from '../features/authSlice';
// import { setUserData } from '../features/userSlice';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Signup = () => {
  //username, name, avatar, email, password

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const usernameRef: any = useRef();
  const nameRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const avatar = 'Herman was here!!';
    const password = passwordRef.current.value;

    console.log(
      'username ' +
        usernameRef.current.value +
        'password ' +
        passwordRef.current.value
    );

    const userData = {
      username: username,
      password: password,
      name: name,
      email: email,
      avatar: 'Herman was here',
    };
    console.log('userData: ', userData);
    //@ts-ignore
    dispatch(registerAsync(userData));
    //@ts-ignore

    clearFormValues();

    navigate('/home');
  };

  const clearFormValues = () => {
    usernameRef.current.value = '';
    nameRef.current.value = '';
    emailRef.current.value = '';
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
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete='name'
                name='name'
                required
                fullWidth
                id='name'
                label='name'
                autoFocus
                placeholder='e.g., Herman'
                inputRef={nameRef}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='username'
                label='Username'
                name='username'
                autoComplete='username'
                placeholder='e.g., HermanLovesSox123'
                inputRef={usernameRef}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                placeholder='e.g., herman@redsox.com'
                inputRef={emailRef}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
                placeholder='e.g., herman1234'
                inputRef={passwordRef}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='/login' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Signup;
