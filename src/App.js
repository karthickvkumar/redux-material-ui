import React from 'react';
import { Provider } from 'react-redux'
import './App.css';

import configureStore from './redux/store/configure-store';

import HomePage from './pages/home'

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <HomePage></HomePage>
    </Provider>
  );
}

export default App;
