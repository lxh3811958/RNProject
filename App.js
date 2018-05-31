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

class ShowImg extends Component{
    render() {
        let pic = {
            uri: 'https://home-assist.oss-cn-hangzhou.aliyuncs.com/img/banner/banner_banner_05.png1527648197073.png'
        };
        return (
            <Image source={pic} style={styles.img} />
        )
    }
}

class BodyText extends Component{
    constructor (props) {
        super(props);
        this.state = { showText: true };

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText}
            })
        },1000);
    }
    render(){
        let text = this.state.showText ? this.props.name : '';
        return(
            <Text style={styles.bodyText}>
                {text}
            </Text>
        )
    }
}

export default class App extends Component{
    render() {
        return(
            <View style={styles.view}>
                <Text style={styles.head}>
                    欢迎欢迎！热烈欢迎！
                </Text>
                <BodyText name='123' />
                <ShowImg />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    head: {
        fontSize: 20,
        color: 'red',
        flex: 1,
    },
    bodyText: {
        fontSize: 30,
        color: 'green',
        flex: 2,
    },
    img: {
        width: 150,
        height: 100,
//        flex: 1,
    }
});