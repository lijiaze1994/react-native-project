/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator,createAppContainer } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RouteUtil from '../../route/routeUtil';
import HomePage from './HomePage';
import FollowPage from '../follow/FollowPage';
import NewsPage from '../news/NewsPage';
import MyPage from '../my/MyPage';
import DynamicTabNavigator from '../../route/DynamicTabNavigator';


export default class BottomTabPage extends Component {
  constructor(props){
    super(props);
  }
  // _BottomTab(){
  //   return createAppContainer(createBottomTabNavigator({
  //       HomePage:{
  //         screen:HomePage,
  //         navigationOptions:{
  //           tabBarLabel:'首页',
  //           tabBarIcon:({tintColor,focused}) => (
  //             <Entypo
  //               name={'home'}
  //               size={26}
  //               style={{color:tintColor}}
  //             />
  //           )
  //         }
  //       },
  //       NewsPage:{
  //         screen:NewsPage,
  //         navigationOptions:{
  //           tabBarLabel:'热点',
  //           tabBarIcon:({tintColor,focused}) => (
  //               <MaterialIcons
  //                   name={'whatshot'}
  //                   size={26}
  //                   style={{color:tintColor}}
  //               />
  //           )
  //         }
  //       },
  //       FollowPage:{
  //         screen:FollowPage,
  //         navigationOptions:{
  //           tabBarLabel:'关注',
  //           tabBarIcon:({tintColor,focused}) => (
  //               <AntDesign
  //                   name={'message1'}
  //                   size={26}
  //                   style={{color:tintColor}}
  //               />
  //           )
  //         }
  //       },
  //       MyPage:{
  //         screen:MyPage,
  //         navigationOptions:{
  //           tabBarLabel:'我的',
  //           tabBarIcon:({tintColor,focused}) => (
  //               <FontAwesome5
  //                   name={'user'}
  //                   size={26}
  //                   style={{color:tintColor}}
  //               />
  //           )
  //         }
  //       }
  //   }))
  // }
  render() {
    RouteUtil.navigation = this.props.navigation;
    // const Tab = this._BottomTab();
    return <DynamicTabNavigator />;
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
