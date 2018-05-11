import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import reducers from './reducers';
import rootEpic from './epics';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import 'react-datepicker/dist/react-datepicker.css';
import { loadState, saveState } from './helpers/localStorage';
import _ from 'lodash';

const store = createStore(reducers, loadState(), applyMiddleware(logger, createEpicMiddleware(rootEpic)));
store.subscribe(_.throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
