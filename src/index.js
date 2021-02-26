import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './routes/App';

const initialState = {
  favoriteCharacters: [],
  sectionActive: 'Characters',
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
      <App />  
  </Provider>,
  document.getElementById('root'),
);

