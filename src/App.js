import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDm1UyGMgiySVpMeIwndvzj_yRS9YhHtx0',
      authDomain: 'manager-d1337.firebaseapp.com',
      databaseURL: 'https://manager-d1337.firebaseio.com',
      storageBucket: 'manager-d1337.appspot.com',
      messagingSenderId: '985192909092'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
