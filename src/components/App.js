import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Second from './Second'
import { store } from '../store';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  getChildContext() {
    return {store}
  }

  static childContextTypes = {
    store: PropTypes.object,
  }
  render() {
    return (
      <div>
        <Second />
      </div>
    );
  }
}

export default App;
