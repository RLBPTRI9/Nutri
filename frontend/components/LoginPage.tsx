import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { loginAsync } from '../features/authSlice';

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
      password: password
    }
    //@ts-ignore
    dispatch(loginAsync(userData))

      clearFormValues();

    navigate('/home')
  };

  const clearFormValues = () => {
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <Typography variant='h5'>Login</Typography>
        <br></br>
        <Paper className='login-form-container'>
          <br></br>
          <TextField
            label='Username'
            variant='outlined'
            size='small'
            placeholder='e.g., HermanLovesSox123'
            inputRef={usernameRef}
            sx={{ width: 250 }}
          />
          <br></br>
          <TextField
            label='Password'
            variant='outlined'
            size='small'
            placeholder='e.g., herman'
            inputRef={passwordRef}
            sx={{ width: 250 }}
          />
          <br></br>
          <Button type='submit'>Login</Button>
        </Paper>
      </form>
    </div>
  );
};

export default LoginPage;
