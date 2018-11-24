import React from 'react';
import { Container } from 'reactstrap';

import '../../styles/home/EmptySearch.css';

class EmptySearch extends React.Component {
  render () {
    return (
      <Container className="empty-search-container">
        <h4>No Pokemon Matched Your Search!</h4>
        <p>Try these suggestions to find a Pokemon</p>
        <ul>
            <li>Reduce the number of search parameters</li>
            <li>Search for only one or two Pokemon types at a time</li>
            <li>Ensure Number search is within the range</li>
        </ul>
      </Container>
    );
  }
}

export default EmptySearch;
