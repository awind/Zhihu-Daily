import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import createBrowserHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(logger)
    )
)

const customHistory = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
