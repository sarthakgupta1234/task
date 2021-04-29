import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View, Text,Image, Alert, ScrollView, KeyboardAvoidingView, TouchableOpacity, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {getLogin} from './actions';
import TextField from '../components/TextField';
import Colors from '../components/Colors';
import Indicator from '../components/Indicator';

class LoginDemo extends Component{

	constructor( props ){
		super(props);
        this.state = {
            username : "9816565205",
            password : "9816565205",
            isLoading : false
        }
	}

    _handleOnChangeText = (value,prop) => {
		if(prop == 'username'){
            this.setState({
                username : value
            });
        } else if(prop == 'password'){
            this.setState({
                password : value
            });
        }  
	}

    showError(message){
        Alert.alert(
            '',
            message,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        );
    }

    login = () => {

        let {username, password} = this.state;

        if(!username){
            this.showError('Please enter valid username');
            return;
        }
        if(!password){
            this.showError('Please enter valid password');
            return;
        }

        this.setState({isLoading: true});

        this.props.getLogin(
            this.state.username,
            this.state.password,
            () => {
                this.setState({isLoading: false});
                Actions.userDashboard();
            },
            (message) => {
                this.showError(message),
                this.setState({isLoading: false});
            }
        )
    }

    renderLoginForm(){
        return(
            <View style={styles.login_container}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.login_text}>Log In</Text>
                </View>
                <View style={{padding:10}}>
                    <TextField
                        placeholder="Username"
                        autoFocus={true}
                        value={this.state.username}
                        placeholderTextColor="#AAA"
                        onChangeText={(text) => this._handleOnChangeText(text,"username")}
                    />
                    <TextField
                        placeholder="Password"
						secureTextEntry = {true}
                        value={this.state.password}
                        placeholderTextColor="#AAA"
                        onChangeText={(text) => this._handleOnChangeText(text,"password")}
                    />

                    <TouchableOpacity style={styles.login_button} onPress={this.login}>
                        <Text style={[styles.login_text,{color:'#FFF'}]}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

	render(){
        if(this.state.isLoading) return <Indicator isLoading={this.state.isLoading}/>
		return (
			<View style={styles.main_container}>
                <SafeAreaView>
                    <TouchableOpacity style={{paddingVertical:20,paddingHorizontal:10}}>
                        <Image style={styles.icon_style} source={require('../images/back.png')}></Image>
                    </TouchableOpacity>
                </SafeAreaView>
				<KeyboardAvoidingView
                    style={{}}
                >
					<ScrollView
						keyboardDismissMode="on-drag"
						showsVerticalScrollIndicator={false}
						keyboardShouldPersistTaps="handled"
						ref='_scrollView'
					>
                        {this.renderLoginForm()}
					</ScrollView>
				</KeyboardAvoidingView>	
			</View>
		);
	}
}

const styles = {
	main_container : {
		backgroundColor:'#FFF',
        flex:1
    },
    login_container:{
        flex:1,
        marginTop:100
    },
    login_text:{
        fontSize:22,
        fontWeight:'bold'
    },
    login_button:{
        padding:10,
        alignItems:'center',
        borderRadius:10,
        backgroundColor:Colors.themeColor,
        marginTop:10
    },
    icon_style:{
        width:24,
        height:24
    }
}

const mapStateToProps = (state) => {
 	const {} = state.login_reducer;
 	return {};
}

export default connect(mapStateToProps, {getLogin})(LoginDemo);
