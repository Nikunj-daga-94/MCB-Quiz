import React,{Component} from 'react';
//import logo from './logo.svg';
import 'bootstrap/less/bootstrap.less'
import './App.css';
import Header from './header';
import Dashboard from './dashboard';
// import { Component } from 'react';
//import { Router, Route, Link, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Dashboard/>
      </div>
    );
  }
 
}
export default App;
