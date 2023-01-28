import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { NutriContextProvider } from './store/nutri-context.js';
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.querySelector('#app')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <NutriContextProvider>
        <App />
      </NutriContextProvider>
    </Provider>
  </React.StrictMode>
);

//ask group about what happens when you use prettier here (turns into one line)
// You made it prettier?
