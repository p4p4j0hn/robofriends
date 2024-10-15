import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
// import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

// Need to find a way to only enable this in dev, same as logger.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const logger = createLogger();

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
