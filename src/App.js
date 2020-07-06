import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Main from './components/main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Main />;
  }
}

export default hot(App);