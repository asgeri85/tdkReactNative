import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import initialState from './store';

const UseProvider = ({children}) => {
  const store = createStore(reducers, initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default UseProvider;
