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
  constructor(props){
    super(props);
    this.tabNames = ['JavaScript','React-Native','PHP','Linux','IOS','Android'];
  }

  _genTabs(){
    const tabs={};
    this.tabNames.forEach((item,index)=>{
        tabs[`tab${index}`] = {
          screen: props => <ReactNative {...props} tabLabel={item}/>,
          navigationOptions:{
            title:item,
          }
        }
    });
    return tabs;
  }
  render() {
    const TopTab = createAppContainer(
        createMaterialTopTabNavigator(
            this._genTabs(),{
              tabBarOptions:{
                  upperCaseLabel:false,//标签是否大写
                  scrollEnabled:true, //是否支持选项卡滚动
                  style:{
                    backgroundColor:'#678',
                  },
                  indicatorStyle:styles.indicatorStyle,
                  labelStyle:styles.labelStyle
              }
            }
        ));
    return <TopTab />;
  }
}

class ReactNative extends Component {
  render() {
    const { tabLabel } = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>{tabLabel}!</Text>
          <Text onPress={()=>{
            RouteUtil.goPage({},"DetailPage")
          }}>ReactNative</Text>
        </View>
    );
  }
}

class JavaScript extends Component {
  render() {
    const { tabLaber } = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>{tabLaber}!</Text>
          <Text onPress={()=>{
            RouteUtil.goPage({},"DetailPage")
          }}>JavaScript</Text>
        </View>
    );
  }
}
class Linux extends Component {
  render() {
    const { tabLaber } = this.props;
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>{tabLaber}!</Text>
          <Text onPress={()=>{
            RouteUtil.goPage({},"DetailPage")
          }}>Linux</Text>
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
  indicatorStyle:{
    height:2,
    backgroundColor:'#fff'
  },
  labelStyle:{
    fontSize: 13,
    marginTop:6,
    marginBottom:6
  }
});
