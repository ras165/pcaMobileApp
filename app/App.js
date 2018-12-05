import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginStack from './navigators/NavigationStack';
import NavigationService from './services/NavigationService';

export default class App extends Component  {
  render() {
    return (
      <LoginStack
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    /> 
    );
  }
}

const styles = StyleSheet.create({
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
