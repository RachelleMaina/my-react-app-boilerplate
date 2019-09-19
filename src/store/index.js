import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import watchSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// create redux store
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools,
  ),
);

// run the saga
sagaMiddleware.run(watchSaga);

export default store;
