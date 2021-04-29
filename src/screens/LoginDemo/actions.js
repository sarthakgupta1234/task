import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import {config} from '../../config';


export const getLogin = (username,password,callback,error) => {

	let body = {
		'username' : username,
		'password' : password
	};

	return (dispatch) => {
	  axios.post('http://stgdialerapi.vl8.in/login',{},{ body : JSON.stringify({
		  'username' : username,
		  'password' : password
	  })}
		,{
			headers: {'Content-Type' : 'application/json' }
		}
	  )
	  .then(response => {
			let data = response.data;
            if(data.message == 'Success'){
                callback();
                config.api_token = data.token;
                dispatch({ type : 'login_field_change', payload: { prop: 'userid', value: data.userid} });

            } else {
                error(data.message);
            }
        })
  
	  .catch(function (error) {
		if (error.response) {
		  console.log(error.response);
		}
	  });
  
	};
};

export const getLeads = (userid,callback) => {
	return (dispatch) => {
	  axios.get('http://stgdialerapi.vl8.in/app/leads/'+userid,{
        headers: {'token': config.api_token}	  
	  })
	  .then(response => {
			let data = response.data;
            dispatch({ type : 'login_field_change', payload: { prop: 'lead', value: data} });
            callback();
             
        })
  
	  .catch(function (error) {
		if (error.response) {
		  console.log(error.response);
		}
	  });
  
	};
};

