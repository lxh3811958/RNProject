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
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
    render() {
        return(
            <View style={styles.view}>
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
                <View style={styles.view3}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    view1: {
        flex: 1,
        backgroundColor: '#dadada',
    },
    view2: {
        flex: 1,
        backgroundColor: 'red',
    },
    view3: {
        flex: 1,
        backgroundColor: 'blue',
    }
});