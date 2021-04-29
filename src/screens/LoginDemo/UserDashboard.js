import React, {Component} from 'react';
import { connect } from 'react-redux';
import {View, Text,Image, Linking, TouchableOpacity, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {getLeads} from './actions';
import Colors from '../components/Colors';
import Indicator from '../components/Indicator';

class UserDashboard extends Component{

	constructor( props ){
		super(props);
        this.state = {
            isLoading: false
        }

        this.getLeads();
	}

    getLeads = () => {
        this.props.getLeads(
            this.props.userid,
            () => {
             this.setState({isLoading:false});   
            }
        )
    }

    openDialer = () => {
        let phoneNumber = this.props.lead.mobile;

        Linking.openURL(`tel:${phoneNumber}`);
    }


	render(){
        if(this.state.isLoading) return <Indicator isLoading={this.state.isLoading}/>
        let {leadId, leadNo, name, mobile, emailId, website, city, pincode} = this.props.lead;
		return (
			<View style={styles.main_container}>
                <SafeAreaView>
                    <View style={{justifyContent:'space-around',flexDirection:'row'}}>
                        <TouchableOpacity style={{padding:10}}>
                            <Image source={require('../images/bbfs_logo.png')} style={styles.icon_style}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:10}}>
                            <Image source={require('../images/bbfs_logo.png')} style={styles.icon_style}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:10}}>
                            <Image source={require('../images/bbfs_logo.png')} style={styles.icon_style}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:10}}>
                            <Image source={require('../images/bbfs_logo.png')} style={styles.icon_style}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:10}}>
                            <Image source={require('../images/bbfs_logo.png')} style={styles.icon_style}></Image>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            
                <View style={styles.details_container}>
                    <View style={{flexDirection:'row'}}>
                        <Text>Name: </Text>
                        <Text style={styles.data_style}> {name} </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text>Company Name: </Text>
                        <Text style={styles.data_style}> {city} </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text>Website: </Text>
                        <Text style={styles.data_style}> {website} </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text>Email-Id: </Text>
                        <Text style={styles.data_style}> {emailId} </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text>PIN-Code: </Text>
                        <Text style={styles.data_style}> {pincode} </Text>
                    </View>
                </View>
                <SafeAreaView style={{margin:10}}>
                    <TouchableOpacity style={styles.button_style} onPress={this.openDialer}>
                        <Text style={{color:'#FFF'}}>Click Me To Open Dialer</Text>
                    </TouchableOpacity>
                </SafeAreaView>
			</View>
		);
	}
}

const styles = {
	main_container : {
		backgroundColor:'#8c8c8c',
        flex:1
    },
    button_style:{
        padding:10,
        alignItems:'center',
        backgroundColor:Colors.themeColor,
        borderRadius:10
    },
    icon_style:{
        width:36,
        height:36
    },
    details_container: {
        flex:1,
        justifyContent:'center',
        padding:10,
        backgroundColor:'#FFF',
        margin:10,
        borderRadius:20
    },
    data_style: {
        fontSize:16,
        fontWeight: 'bold',
        color: Colors.themeColor
    }
}

const mapStateToProps = (state) => {
 	const {userid,lead} = state.login_reducer;
 	return {userid,lead};
}

export default connect(mapStateToProps, {getLeads})(UserDashboard);
