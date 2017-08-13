import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDly8Yic1-m5e0OgPItQRTYFb0E4JOR9b8',
      authDomain: 'clove-aaa7a.firebaseapp.com',
      databaseURL: 'https://clove-aaa7a.firebaseio.com',
      projectId: 'clove-aaa7a',
      storageBucket: 'clove-aaa7a.appspot.com',
      messagingSenderId: '672920420353'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
