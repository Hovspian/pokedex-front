import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import PokemonCard from './js/PokemonCard';
import LocalJSON from './local_data/example_single.json';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />, document.getElementById('root'));
ReactDOM.render(<PokemonCard {...LocalJSON} />, document.getElementById('root'));
registerServiceWorker();
