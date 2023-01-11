import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { RecipeDetailsContextProvider } from './store/recipe-details-context.js';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <RecipeDetailsContextProvider>
    <App />
  </RecipeDetailsContextProvider>
);

//ask group about what happens when you use prettier here (turns into one line)
