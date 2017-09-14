import React, { Component } from 'react';
import { getQueryParams } from './utils';
import Login from './Login';
import Main from './Main';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <div className='App'>
        {
          <Main token={'foo'} />
        }
      </div>
    );
  }
}

export default App;
