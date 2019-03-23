import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import epic from '~/redux/epic';
import reducer from '~/redux/reducer';

const epicMiddleware = createEpicMiddleware();

const middlewares = [
  epicMiddleware,
];

let composeEnhancers = compose;

const envKey = process.env.NODE_ENV;
if (envKey === 'development' || envKey === 'demo') {
  if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }
}

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

epicMiddleware.run(epic);

export default store;
