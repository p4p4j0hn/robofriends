import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)), // removed `logger` for testing
);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
