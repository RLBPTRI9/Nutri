import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const LoginPage = () => {
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

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        name,
        email,
        password,
      }),
    };

    fetch(URL + '/register', options).then((data) => {
      console.log('successfully created user', data);
    });
  };

  const clearFormValues = () => {
    usernameRef.current.value = '';
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant='h5'>Allergy Information</Typography>
        <TextField
          label='Name'
          variant='outlined'
          size='small'
          placeholder='e.g., peanuts'
          inputRef={usernameRef}
          sx={{ width: 250 }}
        />
        <TextField
          label='Username'
          variant='outlined'
          size='small'
          placeholder='e.g., peanuts'
          inputRef={nameRef}
          sx={{ width: 250 }}
        />
        <TextField
          label='Email'
          variant='outlined'
          size='small'
          placeholder='e.g., peanuts'
          inputRef={emailRef}
          sx={{ width: 250 }}
        />
        <TextField
          label='Password'
          variant='outlined'
          size='small'
          placeholder='e.g., peanuts'
          inputRef={passwordRef}
          sx={{ width: 250 }}
        />
        <Button type='submit' onClick={clearFormValues}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
