import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './persistance';

let middlewareEnhancer;
if (process.env.NODE_ENV === 'development') {
  // middlewareEnhancer = applyMiddleware(ReduxThunk);
  middlewareEnhancer = applyMiddleware(ReduxThunk, logger);
} else {
  middlewareEnhancer = applyMiddleware(ReduxThunk);
}
const composedEnhancers = compose(
  middlewareEnhancer,
);

const store = createStore(reducers, undefined, composedEnhancers);
const persistor = persistStore(store);

const REDUX = {
  store,
  persistor,
}
export default REDUX;
