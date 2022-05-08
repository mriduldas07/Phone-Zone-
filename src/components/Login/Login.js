import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import LodingCompo from '../LodingCompo/LodingCompo';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const navigateToRegister = e =>{
        navigate('/register')
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [ sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";


    if (loading || sending) {
        return <LodingCompo></LodingCompo>
    }


    const handleEmailBlur = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }

    const handleSubmitForLogin = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, {replace: true});
    }
    const sendEmailToResetPassword = async () =>{
        if(email){
            await sendPasswordResetEmail(email);
            toast("Sent email to reset password");
        }
        else{
            toast("Please input email first");
        }
    }
    return (
        <div className='login-form w-25 mx-auto'>
            <h2>Please Login</h2>
            <form onSubmit={handleSubmitForLogin}>
                <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email...' id="" required/>
                <br />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Password...' id="" required/>
                <br />
                <p style={{color: 'red'}}>{error?.message}</p>
                {
                    loading && <LodingCompo></LodingCompo>
                }
                <p>New to phoneZone?<span className='text-warning' style={{cursor: 'pointer', fontWeight: 700}} onClick={navigateToRegister}> Create an account</span></p>
                <input type="submit" value="Login" />
                <br />
                <p>Forget Password?<span className='text-warning' style={{cursor: 'pointer', fontWeight: 700}} onClick={sendEmailToResetPassword}> Reset Password</span></p>
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;