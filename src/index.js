import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import Exam from './exam';

import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
      <Route path="/exam" component={Exam}></Route>
  </Router>
), document.getElementById('root'))
