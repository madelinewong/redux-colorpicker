import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import './App.css';
import { actions } from './store.js';
import { connect } from "react-redux";

// const picker = document.querySelector('#picker');

// handleOnChange 
// function changeBoxColor(e){
//   const element = e.target;
//   element.style.backgroundColor = picker.value;
// };
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

export default App;
