import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PokemonCard from './js/PokemonCard';
import LocalJSON from './local_data/example_single.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PokemonCard {...LocalJSON} />, document.getElementById('root'));
registerServiceWorker();
