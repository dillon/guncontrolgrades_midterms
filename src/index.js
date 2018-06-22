import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

//  added to set gh-pages subdomain as basename for router
import createHashHistory from 'history/createHashHistory';
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
