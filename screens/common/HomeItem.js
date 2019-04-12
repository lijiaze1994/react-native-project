import React, {Component} from 'react';
import { TouchableOpacity,Text,View,Image,StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class HomeItem extends Component{
    render(){
        const {item} = this.props;
        if (!item || !item.owner) return null;
        let favoriteButton = <TouchableOpacity
            style={{padding: 6}}
            onPress={() => {}}
            underlayColor={'transparent'}
        >
            <FontAwesome name={'star-o'} size={26} style={{color:'red'}}/>
        </TouchableOpacity>;
        return (
            <TouchableOpacity onPress={this.props.onSelect}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {item.full_name}
                    </Text>
                    <Text style={styles.description}>
                        {item.description}
                    </Text>
                    <View style={styles.row}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text>Author:</Text>
                            <Image style={{height:22,width:22,marginLeft: 10}} source={{uri:item.owner.avatar_url}}/>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text>Start:</Text>
                            <Text style={{marginLeft:10}}>{item.stargazers_count}</Text>
                        </View>
                        {favoriteButton}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        padding:10,
        marginLeft:5,
        marginRight:5,
        marginVertical:3,
        borderColor:'#dddddd',
        borderWidth:1,
        borderRadius:2,
        shadowColor:'gray',
        shadowOffset:{width: 1,height: 1},
        shadowOpacity:0.4,
        shadowRadius:1,
        elevation: 2
    },
    title:{
        fontSize:16,
        marginBottom:2,
        color:'#212121'
    },
    description:{
        fontSize: 14,
        marginBottom: 5,
        color:'#757575',
        marginTop:5,
    },
    row:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    }
});