import React, {Component} from 'react';
import {} from 'react-native';
import {Scene, Router, Stack} from 'react-native-router-flux';

import LoginDemo from './screens/LoginDemo/';
import UserDashboard from './screens/LoginDemo/UserDashboard';

class RouterComponent extends Component {

  render(){
    return(
      <Router sceneStyle={{backgroundColor:"#FFF"}}>
        <Stack key="root">
        	<Scene key="loginDemo" component={LoginDemo} hideNavBar={true}  title="Login Page" />
        	<Scene key="userDashboard" component={UserDashboard} hideNavBar={true}  title="" initial/>
        </Stack>
      </Router>
    );
  }
}

const styles = {
 
}

export default RouterComponent;
