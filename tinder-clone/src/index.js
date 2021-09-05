import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { Route, Switch  } from "react-router";
import {BrowserRouter} from "react-router-dom"
import HomePage from './HomePage';
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route  exact path="/" component={HomePage} />
      <Route  exact path="/main" component={App} />
    </Switch>
    </BrowserRouter>

    
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
