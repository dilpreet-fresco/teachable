import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import reducers from './reducers';
import authInit from './admin/auth/authInit';

export function configureStore(preloadedState) {
  const middlewares = [thunk];

  const store = createStore(
    reducers(),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  authInit(store);

  return store;
}
