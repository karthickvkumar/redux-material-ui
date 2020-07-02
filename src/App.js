import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import configureStore from './redux/store/configure-store';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/home" exact component={HomePage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
