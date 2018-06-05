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
  TextInput,Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state= ({
            sum: 0,
            sum1: 1,
            content: '',
            msg: '',
        });
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return(
            <View>
                <Button color='#dadada' title='12' onPress={() => {
                    this.setState({
                        sum: this.state.sum + 1,
                    });
                }} />
                <Button color='pink' title='start' onPress={() => {
                    this.interval = setInterval(() =>{
                        this.setState({
                            sum1: this.state.sum1 + 1,
                        });
                    },1000)
                }} />
                <Button color='blue' title='end' onPress={() => {
                    this.interval && clearInterval(this.interval);
                }} />
                <Text style={{fontSize:40}}>{this.state.sum}</Text>
                <Text style={{fontSize:40}}>{this.state.sum1}</Text>
            </View>
        )
    }
}