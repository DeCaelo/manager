import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hi !
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
