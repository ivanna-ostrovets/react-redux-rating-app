import { createStore } from 'redux';

import rootReducer from '../reducers/reducers';

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
  )
}
