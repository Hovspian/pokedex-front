import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

it('Renders home page without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});