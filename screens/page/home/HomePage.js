/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, ActivityIndicator, View,FlatList,RefreshControl,Text} from 'react-native';
import {connect} from 'react-redux';
import actions from '../../action/index';
import { createMaterialTopTabNavigator,createAppContainer } from 'react-navigation';
import RouteUtil from "../../route/routeUtil";
import Toast from 'react-native-easy-toast';
import HomeItem from '../../common/HomeItem';
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const THEME_COLOR='blue';

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.tabNames = ['JavaScript','React-Native','PHP','Linux','IOS','Android'];
  }

  _genTabs(){
    const tabs={};
    this.tabNames.forEach((item,index)=>{
        tabs[`tab${index}`] = {
          screen: props => <HomeTabPage {...props} tabLabel={item}/>,
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
const pageSize = 10;
class HomeTab extends Component {
    constructor(props){
        super(props);
        const { tabLabel } = this.props;
        this.storeName = tabLabel
    }
    componentDidMount() {
        this.loadData();
    }
    loadData(LoadMore){
        const { onLoadHomeData ,onLoadMoreHome} = this.props;
        const store = this._store();
        const url = this.genFetchUrl(this.storeName);
        if (LoadMore){
            onLoadMoreHome(this.storeName,++store.pageIndex,pageSize,store.items,callback=>{
               this.refs.toast.show('没有更多了');
           })
        }else{
            onLoadHomeData(this.storeName,url,pageSize)
        }
    }

    _store(){
        const {home } = this.props;
        let store = home[this.storeName];
        if (!store){
            store={
                items:[],
                isLoading:false,
                projectModes:[],
                hideLoadingMore:true
            }
        }
        return store;
    }

    genFetchUrl(key){
        return URL + key + QUERY_STR;
    }
    genIndicator(){
        return this._store().hideLoadingMore ? null:
            <View style={styles.indicatorContainer}>
                <ActivityIndicator style={styles.indicator}/>
                <Text>正在加载更多</Text>
            </View>;
    }
    renderItem(data){
        const item = data.item;
        return <HomeItem
                item={item}
                onSelect={() => {}}
        />
    }
    render() {
    const { home } = this.props;
    let store = this._store();
    return (
        <View style={styles.container}>
            <FlatList
                data={store.projectModes}
                renderItem={data => this.renderItem(data)}
                keyExtractor={ item => "" + item.id}
                refreshControl={
                    <RefreshControl
                        title='Loading'
                        titleColor={THEME_COLOR}
                        colors={[THEME_COLOR]}
                        refreshing={store.isLoading}
                        onRefresh={() => this.loadData()}
                        tintColor={THEME_COLOR}
                    />
                }
                ListFooterComponent={()=>this.genIndicator()}
                onEndReached={() => {
                    if (this.canLoadMore){
                        this.loadData(true);
                        this.canLoadMore = false;
                    }
                }}
                onEndReachedThreshold={0.5}
                onMomentumScrollBegin={() => {
                    this.canLoadMore = true
                }}
            />
            <Toast
                ref={'toast'}
                position={'center'}
            />

        </View>
    );
  }
}
const mapStateToProps = state => ({
    home:state.home
});
const mapDispatchToProps = dispatch => ({
    onLoadHomeData: (storeName,url,pageSize) => dispatch(actions.onLoadHomeData(storeName,url,pageSize)),
    onLoadMoreHome: (storeName,pageIndex,pageSize,items,callback) => dispatch(actions.onLoadMoreHome(storeName,pageIndex,pageSize,items,callback))
});

const  HomeTabPage = connect(mapStateToProps,mapDispatchToProps)(HomeTab);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
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
  },
    indicatorContainer:{
      alignItems:'center'
    },
    indicator:{
        color:'red',
        margin:10
    }
});
