import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const RegisterPage = () => {
  const URL = 'http://localhost:3000';

  const usernameRef: any = useRef();
  const nameRef: any = useRef();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // console.log(username, name, email, password);

    const username = usernameRef.current.value;
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(
      'username ' +
        usernameRef.current.value +
        'password ' +
        passwordRef.current.value
    );

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }),
    };

    fetch(URL + '/api/login', options)
      .then((data) => data.json())
      .then((data) => {
        console.log('user is logged in!', data);
      });

    usernameRef.current.value = '';
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  const clearFormValues = () => {
    // usernameRef.current.value = '';
    // nameRef.current.value = '';
    // emailRef.current.value = '';
    // passwordRef.current.value = '';
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
            placeholder='e.g., peanuts'
            inputRef={nameRef}
            sx={{ width: 250 }}
          />
          <br></br>
          <TextField
            label='Username'
            variant='outlined'
            size='small'
            placeholder='e.g., peanuts'
            inputRef={usernameRef}
            sx={{ width: 250 }}
          />
          <br></br>
          <TextField
            label='Email'
            variant='outlined'
            size='small'
            placeholder='e.g., peanuts'
            inputRef={emailRef}
            sx={{ width: 250 }}
          />
          <br></br>
          <TextField
            label='Password'
            variant='outlined'
            size='small'
            placeholder='e.g., peanuts'
            inputRef={passwordRef}
            sx={{ width: 250 }}
          />
          <br></br>
          <Button type='submit' onClick={clearFormValues}>
            Sign up
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default RegisterPage;
