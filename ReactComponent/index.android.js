'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const superID = require('react-native').NativeModules.SuperIDRN;
console.log(superID);

class MyAwesomeApp extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
    superID.show('Awesome', superID.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('MyAwesomeApp', () => MyAwesomeApp);
