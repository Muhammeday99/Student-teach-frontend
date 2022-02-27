import React from 'react'
import GoogleLogin from 'react-google-login'
import { BsGoogle } from 'react-icons/bs';
import useAuth from '../hooks/useAuth';


export default function LoginViaGoogle() {
    const { signInGoogle } = useAuth();

    const googleSignInFailure = (response) => {
        console.log(response);
    }

    return (
        <GoogleLogin
            clientId="157063568115-nd824sg6j2s1f43so3kvle22nt734opr.apps.googleusercontent.com"
            render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}><a className='btnSecondary'><BsGoogle />&nbsp; Login with Google </a></button>
            )}
            buttonText="Login"
            onSuccess={signInGoogle}
            onFailure={googleSignInFailure}
            cookiePolicy={'single_host_origin'}
        />
    )
}
