import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from "redux-thunk";

import App from './containers/App';

import rootSaga from './saga/saga.js'
import reducer from './reducers'


const sagaMiddleware = createSagaMiddleware();

// Create the store with two middlewares
// sagaMiddleware: Makes redux-sagas work
const middlewares = [
  sagaMiddleware,
  thunk
];

const enhancers = [
  applyMiddleware(...middlewares),
];

export const store = createStore(
  reducer,
  {},
  compose(...enhancers)
)

sagaMiddleware.run(rootSaga)


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
