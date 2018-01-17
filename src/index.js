import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RatingApp from './containers/RatingApp';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
      <RatingApp />
    </Provider>,
    document.getElementById('root'),
);
