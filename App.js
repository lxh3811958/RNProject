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
  Image,
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
    constructor (props) {
        super(props);
        this.state = { text: ''};
    }
    render() {
        return(
            <View>
                <TextInput style={styles.textInput} placeholder='123' onChangeText={(text) => {this.setState({text})}} />
                <Text style={styles.text}>
                    {this.state.text.split(' ').map( (text) => text && '1' ).join(' ')}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: 100,
        height: 50,
    },
    text: {
        padding:10,
        fontSize: 30,
        width: 200,
        height: 100,
        backgroundColor: '#dadada',
        color: 'black',
    }
});