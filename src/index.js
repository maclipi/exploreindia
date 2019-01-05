import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderDefault from './containers/headerDefault'
import * as serviceWorker from './serviceWorker';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';


ReactDOM.render(
<Router history={hashHistory}>
        <Route exact path='/' component={App} />
        <Route path="/head" component={HeaderDefault}></Route>

        
      </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
