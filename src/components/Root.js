import React from 'react';
import { Provider } from 'react-redux';
import RatingApp from '../containers/RatingApp';

const Root = ({ store }) => (
  <Provider store={store}>
    <RatingApp />
  </Provider>
);

export default Root;
