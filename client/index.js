import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { NutriContextProvider } from './store/nutri-context.js';
import {BrowserRouter} from 'react-router-dom';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <BrowserRouter>
  <NutriContextProvider>
    <App />
  </NutriContextProvider>
  </BrowserRouter>
);

//ask group about what happens when you use prettier here (turns into one line)
