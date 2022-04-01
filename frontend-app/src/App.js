import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
//import userList from "./components/UserList";
//const {Greet} = require( "./components/greet")
const Greet = require( "./components/greet")
//import Welcome from "./components/welcome";

//import Hello from "./components/hello"

function App(){ 
  return (
    <div className="App">
       <Greet />
    {/*   <Welcome/> 
      
  <Hello/> */}

{/*   <h2>Higher Order Component</h2>
  <div className="section">
    <userList/>
  </div> */}
    </div>
  );

}
export default App;
