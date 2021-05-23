import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Details from './pages/Details';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApiProvider } from 'react-use-api'

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/details" component={Details}></Route>
        </Switch>
     </Router>
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
