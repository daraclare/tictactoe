import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Game from './components/Game';
import './styles/styles.css';

//enable hot module replacement;
if(DEVELOPMENT) { //eslint-disable-line
  if (module.hot) {
    module.hot.accept();
  }
}

render(
    <BrowserRouter>
      <Route path="/" component={Game} />
    </BrowserRouter>, document.getElementById('root'));
