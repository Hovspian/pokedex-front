import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './js/home/Home';

import './index.css';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

// Commented out server worker while working on file locally to
// keep from caching changes.
// registerServiceWorker();
