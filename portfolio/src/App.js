import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Header from './components/Header';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
