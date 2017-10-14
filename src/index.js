import React from 'react';
import ReactDOM from 'react-dom';

import { SearchBar } from './components/search-bar';

import { ApiKeys } from '../api-keys.constant.js';

const API_KEY = ApiKeys.youtube;

const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
