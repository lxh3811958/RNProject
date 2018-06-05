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
    constructor(props) {
        super(props);
        this.state = ({
            sum: 0,
            sum1: 0,
            content: '',
            msg: '',
        })
    }

    componentDidMount() {
        this.interval = setInterval (() => {
            this.setState({
                sum: this.state.sum + 1,
            });
        }, 500);
        this.interval_two = setInterval(() => {
            this.setState({
                sum1: this.state.sum1 + 2,
            });
        },1000);
        this.timer = setTimeout(() => {
           this.setState({
               content: 'one',
           });
        }, 500);
        this.timer_two = setTimeout(() => {
            this.setState({
               msg: 'two',
            });
        },3000);
    }

    componentWillUnmount() {
        // this.interval && clearInterval(this.interval);
        this.timer_two && this.timer;
    }

    render() {
        return(
            <View>
                <Text style={styles.text}>{this.state.sum}</Text>
                <Text style={styles.text}>{this.state.sum1}</Text>
                <Text style={styles.text}>{this.state.content}</Text>
                <Text style={styles.text}>{this.state.msg}</Text>
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