import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../redux/rootReducer';

import Scene from '../components/Scene';

import './app.scss';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Scene />
    </Provider>
  );
}

export default App;
