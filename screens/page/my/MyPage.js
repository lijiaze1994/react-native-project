/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import actions from "../../action";
import RouteUtil from "../../route/routeUtil";

class MyPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MyPage!</Text>
        <Text onPress={()=>{
            this.props.onThemeChange('pink');
        }}>
          改变底部颜色
        </Text>
          <Text onPress={()=>{
              RouteUtil.goPage({},"DetailPage")
          }}>ReactNative</Text>
          <Text onPress={()=>{
              RouteUtil.goPage({},"FetchDemoPage")
          }}>Fetch Demo</Text>
          <Text onPress={()=>{
              RouteUtil.goPage({},"DataStorePage")
          }}>DataStorePage Demo</Text>
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    onThemeChange: theme => dispatch(actions.onThemeChange(theme))
});
export default connect(mapStateToProps,mapDispatchToProps)(MyPage);