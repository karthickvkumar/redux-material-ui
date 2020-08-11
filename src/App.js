import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import configureStore from './redux/store/configure-store';
import LoginPage from './pages/login';
import './App.css';

const HomePage = lazy(() => import('./pages/home'));

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/home" render={() => {
              return (
                <Suspense fallback={<h2>Loading...</h2>}>
                  <HomePage></HomePage>
                </Suspense>
              )
            }
            } />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
