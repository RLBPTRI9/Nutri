import React from 'react';
import { Outlet, json } from 'react-router-dom';
import ResponsiveAppBar from '../ResponsiveAppBar';

export interface AuthorizationStatus {
    status: number;
    statusText: string;
  }
  
const Root = () => {
    return (
        <div>
        <ResponsiveAppBar/>
          <Outlet />
          </div>
      );
}

export default Root;