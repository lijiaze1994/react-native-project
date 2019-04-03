/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,ImageBackground,Dimensions} from 'react-native';

const { width , height} = Dimensions.get('window');
const welcome = require('../../images/welcome.png');


export default class WelcomePage extends Component{
  componentDidMount() {
    setTimeout(() =>{
        const { navigation } = this.props;
        navigation.navigate("Main");
    },5000)
  }
  render() {

    return (
      <ImageBackground source={welcome} style={styles.container}>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:width,
    height:height,
  },
});
