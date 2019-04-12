/**
 * 底部导航器配置
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createBottomTabNavigator,createAppContainer,BottomTabBar } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RouteUtil from '../route/routeUtil';
// 引入页面
import HomePage from '../page/home/HomePage';
import FollowPage from '../page/follow/FollowPage';
import NewsPage from '../page/news/NewsPage';
import MyPage from '../page/my/MyPage';
import {connect} from 'react-redux';
// import  BottomTabBar  from 'react-navigation-tabs';
const Tabs = {
  HomePage:{
    screen:HomePage,
    navigationOptions:{
      tabBarLabel:'首页',
      tabBarIcon:({tintColor,focused}) => (
          <Entypo
              name={'home'}
              size={26}
              style={{color:tintColor}}
          />
      )
    }
  },
  NewsPage:{
    screen:NewsPage,
    navigationOptions:{
      tabBarLabel:'热点',
      tabBarIcon:({tintColor,focused}) => (
          <MaterialIcons
              name={'whatshot'}
              size={26}
              style={{color:tintColor}}
          />
      )
    }
  },
  FollowPage:{
    screen:FollowPage,
    navigationOptions:{
      tabBarLabel:'关注',
      tabBarIcon:({tintColor,focused}) => (
          <AntDesign
              name={'message1'}
              size={26}
              style={{color:tintColor}}
          />
      )
    }
  },
  MyPage:{
    screen:MyPage,
    navigationOptions:{
      tabBarLabel:'我的',
      tabBarIcon:({tintColor,focused}) => (
          <FontAwesome5
              name={'user'}
              size={26}
              style={{color:tintColor}}
          />
      )
    }
  }
};

class DynamicTabNavigator extends Component {
  constructor(props){
    super(props);
    this._BottomTab = this._BottomTab.bind(this);
  };
  _BottomTab(){
    if(this.Tabs){
        return this.Tabs;
    }
    const {HomePage,NewsPage,FollowPage,MyPage} = Tabs;
    const tabs ={ HomePage,NewsPage,FollowPage,MyPage};
    return this.Tabs = createAppContainer(
        createBottomTabNavigator(tabs,
            {
                  tabBarComponent:props => {
                    return <TabBarComponent theme={this.props.theme} {...props}/>
                  }
            }
        )
    )
  }
  render() {
    // RouteUtil.navigation = this.props.navigation;
    const Tab = this._BottomTab();
    return <Tab />;
  }
}

class TabBarComponent extends React.Component{
  constructor(props){
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime:new Date().getTime(),
    };
  }
  render() {
    // const { routes,index} = this.props.navigation.state;
    // if(routes[index].params){
    //     const { theme } =routes[index].params;
    //     if(theme && theme.updateTime> this.theme.updateTime){
    //         this.theme = theme;
    //     }
    // }
    return  <BottomTabBar
          {...this.props}
          // activeTintColor={this.theme.tintColor || this.props.activeTintColor}
          activeTintColor={this.props.theme}
      />
  }
}

const mapStateToProps = state => ({
  theme:state.theme.theme,
});
export default connect(mapStateToProps)(DynamicTabNavigator);

