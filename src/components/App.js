import React, { Component } from 'react';
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
  render() {
    return (
      <div>
        <Second second={this.state.second} third={this.state.third} forth={this.state.forth} />
      </div>
    );
  }
}

export default App;
