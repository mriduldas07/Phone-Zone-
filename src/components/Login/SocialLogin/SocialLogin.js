import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LodingCompo from '../../LodingCompo/LodingCompo';
import './SocialLogin.css'

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, 
            user, 
            loading, 
            error
        ] = useSignInWithGoogle(auth);

        const location = useLocation();
        let from = location?.state?.from?.pathname || "/";

        if (loading) {
            return <LodingCompo></LodingCompo>
        }
        if (user) {
            navigate(from, {replace: true});
        }
    return (
        <>
        <br />
        {
            error && <p className='text-danger'>Error: {error.message}</p>
        }
        <div className='social'>
        <img src="https://i.ibb.co/F8DDkSs/icons8-google-48.png" alt="" />
            <span variant="light" onClick={() =>signInWithGoogle()}>Google Sign In</span>
        </div>
        </>
    );
};

export default SocialLogin;