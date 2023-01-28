import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthorizationStatus } from './Root';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ErrorResponse {
  data: AuthorizationStatus;
}

const ErrorPage: React.FC = () => {
  const { data: error } = useRouteError() as ErrorResponse;
  console.error('Error in navigating to desired route: ', error);

  return (
    <div id="error-page">
      <div id='errorText'>
        <p>404</p>
      <h1>Uh-oh! You got lost in the sauce.</h1>
      <p>An unexpected error occurred.</p>
      <h3 ><a href='/home' >Go back home <ArrowForwardIcon style={{marginLeft: '5px'}}/></a></h3>
      <p>{error && <i>{error.statusText || error.status}</i>}</p>
      </div>
      <img src="https://source.unsplash.com/PFX41973J6M" alt="An almost empty sriracha sauce bottle."></img>
    </div>
  );
};

export default ErrorPage;