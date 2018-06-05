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
  View, FlatList,TextInput,Picker
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state = ({
           language: 'two'
        });
    }

    render() {
        return(
            <Picker
                selectedValue={this.state.language}
                onValueChange={(itemValue,itemIndex) => {this.setState({language:itemValue})}}>
                <Picker.Item label='1' value='one' />
                <Picker.Item label='2' value='two' />
                <Picker.Item label='3' value='three' />
            </Picker>
        )
    }
}