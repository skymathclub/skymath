import React, {Component, useState} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import dotenv from 'dotenv'

dotenv.config();
const google_client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
console.log(process.env);

function GoogleButton(props) {

    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [name, setname] = useState('');
    const [email, setemail] = useState('');

    
    const onGoogleLogOutSuccess = (res) => {
        console.log('Log Out Success');
        setisLoggedIn(false);
        setname('');
        setemail('');
    }

    const onGoogleLogOutFailure = (res) => {
        console.log('Log Out Failed:', res);
    }

    const onGoogleLogInSuccess = (profile) => {
        console.log(profile);
            setisLoggedIn(true);
            setname(profile.profileObj.name);
            setemail(profile.profileObj.email);
    }

    const onGoogleLogInFailure = (res) => {
        console.log('Log In Failed:', res);
    }
    return (
            isLoggedIn ?
            <div className="App">
                    <h6>Welcome {name} ({email})</h6>
                    <GoogleLogout
                        clientId={google_client_id}
                        buttonText='Log Out'
                        onLogoutSuccess={onGoogleLogOutSuccess}
                        onFailure={onGoogleLogOutFailure}
                        ></GoogleLogout></div>:<GoogleLogin
                        clientId={google_client_id}
                        buttonText='Log In'
                        onSuccess={onGoogleLogInSuccess}
                        onFailure={onGoogleLogInFailure}
                        cookiePolicy={'single_host_origin'}
                        responseType='code,token'
                        />
    )

}

export default GoogleButton;
