import React from 'react';
import { Outlet, json } from 'react-router-dom';
import ResponsiveAppBar from '../ResponsiveAppBar';


const Root = () => {
    return (
        <div>
        <ResponsiveAppBar/>
          <Outlet />
          </div>
      );
}

export default Root;