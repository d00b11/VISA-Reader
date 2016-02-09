import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import makeStore from './store';
import { setEntries, setCategories } from './actions.js';

import mockCharges from './mock/charges.json';
import mockCategories from './mock/categories.json';

const store = makeStore();

store.dispatch(setEntries(mockCharges));
store.dispatch(setCategories(mockCategories));

import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
