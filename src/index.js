import React from 'react'
import ReactDOM from 'react-dom'
// import 'babel-polyfill'
import 'normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';
import App from './app'


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
