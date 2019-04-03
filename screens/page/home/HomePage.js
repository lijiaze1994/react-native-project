/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createMaterialTopTabNavigator,createAppContainer } from 'react-navigation';
import RouteUtil from "../../route/routeUtil";

export default class HomePage extends Component {
  render() {
    const TopTab = createAppContainer(createMaterialTopTabNavigator({
      HomePageTabOne:{
        screen :  HomePageTab,
        navigationOptions:{
          title:'React-Native'
        }
      },
      HomePageTabTwo:{
        screen :  HomePageTab,
        navigationOptions:{
          title:'JavaScript'
        }
      }
    }));
    return <TopTab />;
  }
}

class HomePageTab extends Component {
  render() {
    const { tabLaber } = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>{tabLaber}!</Text>
          <Text onPress={()=>{
            RouteUtil.goPage({},"DetailPage")
          }}>跳转</Text>
        </View>
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
