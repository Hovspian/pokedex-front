import React from 'react';
import ReactDOM from 'react-dom';

import Home from './js/home/Home';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

// Commented out server worker while working on file locally to
// keep from caching changes.
// registerServiceWorker();
