'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const superID = require('react-native').NativeModules.SuperIDRN;
superID.debug(true);

class SimpleApp extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
    superID.show('Awesome', superID.SHORT);
    superID.version().then((ret) => {
      console.log(ret);
      this.setState({version: `version: ${ret.version} build: ${ret.build}`});
    }).catch(console.log);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to SuperID React Native!
        </Text>
        <Text style={styles.instructions}>
          {this.state.version}
        </Text>
        <Text style={styles.instructions}>
          {this.state.info}
        </Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
