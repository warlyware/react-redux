import React from 'react';
import ReactDOM from 'react-dom';

import { ApiKeys } from '../api-keys.constant.js';

const API_KEY = ApiKeys.youtube;

const App = () => {
  return <div>hello world</div>
}

ReactDOM.render(<App />, document.querySelector('.container'));
