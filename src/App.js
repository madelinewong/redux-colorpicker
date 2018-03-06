import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

const picker = document.querySelector('#picker');

function changeBoxColor(e){
  const element = e.target;
  element.style.backgroundColor = picker.value;
};
class App extends Component {
  render() {
    return (
      <div className="div1">
      <div className="div2">
        <input type="color"/>
      </div> 
      </div>
    );
  }
}

export default App;
