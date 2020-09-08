import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';

const google_client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Logout(){
    const onGoogleLogOutSuccess = (res) => {
        console.log('Log Out Success');
    }

    const onGoogleLogOutFailure = (res) => {
        console.log('Log Out Failed:', res);
    }

    return (
        <GoogleLogout
            clientId={google_client_id}
            buttonText='Log Out'
            onLogoutSuccess={onGoogleLogOutSuccess}
            onFailure={onGoogleLogOutFailure}
        ></GoogleLogout>
    )
}

export default Logout;
