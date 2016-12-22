import React from 'react';
import {Router, Route, hashHistory} from 'react-router'
import ReactDOM from 'react-dom';
import App from './App';
import Batman from './Batman'
import Superman from './Superman'
import Wonder_Woman from './Wonder_Woman'
import Flash from './Flash'
import Green_Lantern from './Green_Lantern'
import Aquaman from './Aquaman'
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
      <Route path="/batman" component={Batman}/>
      <Route path="/superman" component={Superman}/>
      <Route path="/wonder_woman" component={Wonder_Woman}/>
      <Route path="/flash" component={Flash}/>
      <Route path="/green_lantern" component={Green_Lantern}/>
      <Route path="/aquaman" component={Aquaman}/>
  </Router>
), document.getElementById('root'))
