import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './app';

const history = createBrowserHistory();

ReactDOM.render(<App history={history} />, document.getElementById('root'));
