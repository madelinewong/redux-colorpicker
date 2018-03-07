import React, { Component } from 'react';
import { SwatchesPicker } from 'react-color';
import './App.css';
import { changeColor } from './store.js';
import { connect } from "react-redux";


class App extends Component {

  render() {
    return (
      <div>
      <div className="div1" style={{backgroundColor: this.props.color}}></div>
      <SwatchesPicker onChange={(color) => this.props.changeColor(color.hex) } />
      </div>
    );
  }
}

//mapstatetoprops
const mapStateToProps = (state) => {
  return {
    color: state.color
  };
};
//mapdispatchtoprops

const mapDispatchToProps = dispatch => {
  return {
    changeColor: (color) => dispatch(changeColor(color))
  };
};
//wrap the app in connect
export default connect(mapStateToProps, mapDispatchToProps)(App);
