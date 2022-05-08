import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import LodingCompo from '../LodingCompo/LodingCompo';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const navigateToLogin = e =>{
        navigate('/login')
    }
    const [ createUserWithEmailAndPassword
            ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile,
            updating,
        ] = useUpdateProfile(auth);

        if(updating){
            return <LodingCompo></LodingCompo>
        }

        const handleEmailBlur = e =>{
            setEmail(e.target.value);
        }
        const handlePasswordBlur = event =>{
            setPassword(event.target.value);
        }
        const handleConfirmPasswordBlur = event =>{
            setConfirmPassword(event.target.value);
        }

        const handleRegisterOnSubmit = async e =>{
            e.preventDefault();
            if (password !== confirmPassword) {
                setError("Password and Confirm Password must be matched!!!");
                return;
            }
            if (password.length < 6) {
                setError('Password must be 6 digits');
                return;
            }
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({email: email});
            navigate('/login');
    }
    return (
        <div className='login-form w-25 mx-auto'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegisterOnSubmit}>
                <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email...' id="" required/>
                <br />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Password...' id="" required/>
                <br />
                <br />
                <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" placeholder='Confirm Password...' id="" required/>
                <br />
                <p style={{color: 'red'}}>{error}</p>
                <p>Already have an account?<span style={{cursor: 'pointer', fontWeight: 700}} className='text-warning text-decoration-none' onClick={navigateToLogin}> Login</span></p>
                <input type="submit" value="Register" />
            </form>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;