import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
const {Greet} = require( "./components/greet")
//const Greet = require( "./components/greet")
import Welcome from "./components/welcome";
class App extends Component {
  render(){
  return (
    <div className="App">
      <Greet />
      <Welcome/>
    </div>
  );
}
}
export default App;
