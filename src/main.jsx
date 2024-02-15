import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.css'
import { App } from './App';
const root = createRoot(document.getElementById('root'));
import { store } from './app/store'

// Pass state and dispatch props to the <App /> component.
const render = () => {
  root.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch}
      />
    </React.StrictMode>
  )
};
render();

store.subscribe(render);