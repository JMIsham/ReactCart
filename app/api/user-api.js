import axios from 'axios';
import store from '../store';
import {login, userLoginSucceeded} from '../actions/user-actions';

/**
 * Get all users
 */

export function doLogin(username, password) {
    console.log(username+ ":"+password);
    store.dispatch(login());
    return axios({
        method : 'post',
        url : 'http://requestbin.fullcontact.com/1but4g41',
        config : {
            headers:{
                'Content-Type': 'application/json',
                'username' : username,
                'password' : password
            }
        },
        body : {
            data: null
        }
    }).then(response => {
        //write the logic to throw appropriate event
        console.log(response.headers);
        store.dispatch(userLoginSucceeded("test"));
    })
}


