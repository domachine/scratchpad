import React, { Component } from 'react';

import helper from './helper';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>React scratchpad</h1>
        <b>
          <i>Sample answer:</i> {helper()}
        </b>
      </div>
    );
  }
}
