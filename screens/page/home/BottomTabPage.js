/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,BackHandler,ToastAndroid} from 'react-native';
import {NavigationActions} from 'react-navigation';
import RouteUtil from '../../route/routeUtil';
import DynamicTabNavigator from '../../route/DynamicTabNavigator';
import { connect } from 'react-redux';

class BottomTabPage extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress",this.onBackPress);
  };
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress",this.onBackPress);
  };
  /**
   * 处理物理返回键
   */
  onBackPress = () => {
    const { dispatch ,nav } = this.props;
    if(nav.routes[1].index === 0){
      // 5s内按两次物理返回键退出应用
      if (this.lastBackPressed && this.lastBackPressed + 5000 > Date.now()){
          return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT)
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    RouteUtil.navigation = this.props.navigation;
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

const mapStateToProps = state =>({
  nav:state.nav
});
export default connect(mapStateToProps)(BottomTabPage);