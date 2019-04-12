/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,TextInput} from 'react-native';
import DataStore from "../../expand/dao/DataStore";
const KEY = "save_key";
export default class DataStorePage extends Component {
    constructor(props){
        super(props);
        this.state={
            showText:''
        }
        this.dataStore = new DataStore();
    }
    loadData(){
        let url=`https://api.github.com/search/repositories?q=${this.searchKey}`;
        this.dataStore.fetchData(url)
            .then(data => {
                let showData = `初次数据加载时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
                this.setState({
                    showText:showData
                })
            })
            .catch(error=>{
                error && console.log(error.toString());
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>离线缓存框架</Text>
                <View style={styles.fetchOut}>
                    <TextInput style={styles.input} onChangeText={text =>{this.searchKey = text}}/>
                    <Button
                        title='搜索'
                        onPress={() => {this.loadData()}}
                    />
                </View>
                <Text>
                    {this.state.showText}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    fetchOut:{
        flexDirection:'row',
        alignItems: 'center'
    },
    input:{
        flex:1,
        borderWidth:1,
        borderColor:'black'
    }
});

