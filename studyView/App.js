/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}> 
          <Text style={styles.text}> #003459 </Text>
        </View>
        <View style={styles.h_mView}>
          <Text style={styles.text}> #028090 </Text>
        </View>
        <View style={styles.middleView}>
          <Text style={styles.text}> #02C39A </Text>
        </View>
        <View style={styles.footerView}>
          <Text style={ {fontSize: 33, color: '#6638F0'}}> #FCE38A </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerView: {
    flex: 1,
    backgroundColor: '#003459',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h_mView: {
    flex: 1,
    backgroundColor: '#028090',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02C39A',
  },
  footerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  '#FCE38A',
  },
  text: {
    fontSize: 33,
    color: 'white',
  }
});
