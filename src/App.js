import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import './App.css';
import { actions } from './store.js';
import { connect } from "react-redux";


class App extends Component {

  handleChange(color, event) {
console.log(color, event);
  }
  render() {
    return (
      <div>
      <div className="div1">
      </div>
      <SwatchesPicker onChange={ this.handleChange } />
      </div>
    );
  }
}

//mapstatetoprops

//mapdispatchtoprops

//wrap the app in connect
export default App;
