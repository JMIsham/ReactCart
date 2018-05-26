import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as userApi from '../../api/user-api';
import ListItem from '../views/cart-item'
import { connect } from 'react-redux';
import {removeItem} from '../../actions/food-actions'
import store from '../../store.js'

class orderPage extends React.Component{

    removeItem(e) {
        console.log(e);
        store.dispatch(removeItem(e));
    }

    render() {
        if(this.props.users.loginSucceeded){
            this.props.history.push('/');
        }
        return (
            <div>
                <MuiThemeProvider>
                    <div>

                        <ListItem items={this.props.users.Items} deleteItem={this.removeItem.bind(this)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};
const mapStateToProps = function(store) {
    return {
        cart: store.cartReducer,
        food: store.foodReducer,
        users: store.userState
    };
};
export default connect(mapStateToProps)(orderPage);