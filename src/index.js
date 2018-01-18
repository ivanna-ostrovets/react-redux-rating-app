import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './components/Root';

render(
    <Root store={configureStore()} />,
    document.getElementById('root'),
);
