import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import * as userApi from '../../api/user-api';
import { connect } from 'react-redux';

class LoginPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        if(this.props.users.loginSucceeded){
            this.props.history.push('/');
        }
        return (
            <div>
                <MuiThemeProvider>
                    <div>

                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={userApi.doLogin.bind(null, this.state.username, this.state.password)} disabled={this.props.users.loginPending}/>
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
        users: store.userState
    };
};
export default connect(mapStateToProps)(LoginPage);