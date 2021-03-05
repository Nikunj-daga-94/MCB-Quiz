import React,{Component} from 'react';

import './App.css';
class header extends Component {
  
  componentWillMount(){
    this.style={
      float:'right'
    }
  }
  render(){
    return(
    <div className="App">
      <div className="App-header">
        <h2>Welcome to Quiz App</h2>
      </div>
    </div>
    )
  }
}
 



export default header;
