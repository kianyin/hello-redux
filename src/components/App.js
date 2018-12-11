import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Second from './Second'

class App extends Component {
  constructor() {
    super()
    this.state = {
      second: 1,
      third: 10,
      forth: 100
    }
  }
  getChildContext() {
    return {
      second: this.state.second,
      third: this.state.third,
      forth: this.state.forth
    }
  }

  static childContextTypes = {
    second: PropTypes.number,
    third: PropTypes.number,
    forth: PropTypes.number,
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
