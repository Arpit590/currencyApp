import React from 'react';
import {Provider} from 'react-redux';
import Main from './src/Main';
import {store} from './src/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
