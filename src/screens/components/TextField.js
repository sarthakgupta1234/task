import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Colors from './Colors';

export default class TextField extends React.Component {
  render(){
    let  {
        placeholder,
        value,
        onChangeText,
        secureTextEntry,
        keyboardType,
        autoFocus,
        maxLength,
        placeholderTextColor,
        heading,
        backgroundColor,
        autoCapitalize
    } = this.props;

    if(heading == null) heading = null;
    if(autoCapitalize == null) autoCapitalize = "none";

    return(
      <View>
        <View style={{backgroundColor : backgroundColor ? backgroundColor: "#FFF"}}>
            <TextInput
                secureTextEntry = {secureTextEntry}
                placeholder={placeholder}
                value={value}
                style={styles.text_input}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                autoFocus={autoFocus}
                maxLength={maxLength}
                autoCapitalize={autoCapitalize}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
      </View>
    )

  }


}

const styles = {
 text: {
	 color: Colors.themeColor
 },
 text_input:{
    height: 50,
    flex:1,
    padding: 5,
    borderRadius:5,
    fontSize:18,
    borderBottomWidth:1,
    borderBottomColor:Colors.themeColor,
    marginBottom:15
 }
}

