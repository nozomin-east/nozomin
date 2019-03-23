import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '~/store';
import App from '~components/App';

// import App from './components/App';

export interface AppWindow extends Window {
  app_root: HTMLElement;
}

(window as AppWindow).app_root = document.getElementById('root') as HTMLDivElement;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  (window as AppWindow).app_root,
);
