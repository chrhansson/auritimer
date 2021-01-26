import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import './index.css';
import App from './App';
import { Route, Router, Switch, Link } from "react-router-dom";
import TestApp from './components/TestApp/TestApp';

const hist = createBrowserHistory();

const IndexApp = () => {
  return (
    <Router history={hist}>
      <div>

      <Link to="/">Home</Link>{' '}
      <Link to={{pathname: '/app'}}>App</Link>{' '}
      <Link to="/test">test</Link>
    <Switch>
      <Route exact path="/app" component={App}/>
      <Route exact path="/test" component={TestApp}/>
    </Switch>
    </div>
  </Router>
)
};


ReactDOM.render(<IndexApp />, document.getElementById("root"));
