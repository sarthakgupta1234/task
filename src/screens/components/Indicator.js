import React, { Component } from 'react';
import {View,StyleSheet,ActivityIndicator} from 'react-native'
import Colors from './Colors';

export default class Indicator extends Component{

    render(){

        if (this.props.isLoading){
            return (
                <View style={styles.main_loading_container}>
                    <View style={styles.loading_container}>
                      <ActivityIndicator color="#FFF" size="large" />
                    </View>
                </View>
            )
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    main_loading_container:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        alignItems:'center',
        justifyContent:'center',
        zIndex:9000
    },
    loading_container: {
        backgroundColor:Colors.themeColor,
        padding:20,
        borderRadius:10
    }
})
