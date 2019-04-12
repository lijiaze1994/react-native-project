/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View,TextInput} from 'react-native';

export default class FetchDemoPage extends Component {
    constructor(props){
        super(props);
        this.state={
            showText:''
        }
    }
    loadData(){
        let url=`https://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url)
            .then(response => {
                if (response.ok){
                    return response.text()
                }
                throw new Error("Network response was not ok.");
            })
            .then(responseText=>{
                this.setState({
                    showText:responseText
                })
            })
            .catch(e=>{
                this.setState({
                    showText:e.toString()
                })
            })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>FetchDemoPage!</Text>
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

