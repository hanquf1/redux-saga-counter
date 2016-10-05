import "babel-polyfill"

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagaMonitor from './sagaMonitor'

import reducer from './reducers'
import rootSaga from './sagas'
import App from './App'


const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
