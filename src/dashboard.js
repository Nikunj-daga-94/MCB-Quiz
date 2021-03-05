import React,{Component} from 'react';
import { Link } from 'react-router';

import online from './assets/images/online_exam2.png';
import './App.css';
class dashboard extends Component {
  componentWillMount(){
    this.code={
              width:'400px',
              height:'300px'
    },
    this.online={
      width:'250px',
      height:'250px',
      'marginTop':'48px'
    },
    this.rowMargin={
      'marginTop':'50px'
    }
}
render(){
return(
  <div className='rowMargin' style={this.rowMargin}>
  <div className='col-md-12'>
  
  <div className='col-md-5 col-md-offset-1'><Link to='/exam'><img alt='Online Exam' src={online} style={this.online}/></Link></div>
  </div>
  </div>
)
}
}
 


export default dashboard;
