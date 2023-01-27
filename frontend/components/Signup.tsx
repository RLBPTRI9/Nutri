import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom'
import { registerAsync } from '../features/authSlice';

const Signup = () => {
  //username, name, avatar, email, password

  const [userInput, setUserInput] = useState({
    username: '',
    name: '',
    email: '',
    avatar: '',
    password: ''
  })

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
    const avatar = 'Herman was here!!'
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
      avatar: 'Herman was here'
    };
    console.log('userData: ', userData)
    //@ts-ignore
    dispatch(registerAsync(userData))

    clearFormValues();


  };

  const clearFormValues = () => {
    usernameRef.current.value = '';
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
        <Typography variant='h5'>Register</Typography>
        <br></br>
        <Paper className='login-form-container'>
          <TextField
            label='Name'
            variant='outlined'
            size='small'
            placeholder='e.g., Herman'
            inputRef={nameRef}
            sx={{ width: 250 }}
          />
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
            label='Email'
            variant='outlined'
            size='small'
            placeholder='e.g., herman@redsox.com'
            inputRef={emailRef}
            sx={{ width: 250 }}
          />
          <br></br>
          <TextField
            label='Password'
            variant='outlined'
            size='small'
            placeholder='e.g., herman1234'
            inputRef={passwordRef}
            sx={{ width: 250 }}
          />
          <br></br>
          <Button type='submit' onClick={handleSubmit}>
            Sign up
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default Signup;
