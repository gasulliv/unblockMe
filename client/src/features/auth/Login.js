import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice"; 

import '../../components/public.css'
import { FloatingLabel, Button, Flowbite } from 'flowbite-react'

const Login = () => {
    //set focus on form at correct time
    const userRef = useRef();
    const pswrdRef = useRef();
    const errRef = useRef();
    //states for user, password and error message
    const [ user, setUser ] = useState('');
    const [ userFocus, setUserFocus ] = useState(false);
    const [ pswrd, setPswrd ] = useState('');
    const [ pswrdFocus, setPswrdFocus ] = useState(false);
    const [ errMsg, setErrMsg ] = useState('');
    //navigate function to navigate to dashboard on successful login
    const navigate = useNavigate();

    const [ login, { isLoading } ] = useLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        //sets focus to username input
        userRef.current.focus();
    }, []); 

    useEffect(() => {
        //sets focus to username input
        userRef.current.focus();
    }, [ user, pswrd ]); 

    useEffect(() => {
        setErrMsg('');
    }, [ user, pswrd]);

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        //unwrap allows use of react tool kit
        const userData = await login({ user, pswrd }).unwrap();
        dispatch(setCredentials({ ...userData, user }))
        setUser('')
        setPswrd('')
        navigate('/dashboard')
    } catch (err) {
        //if there is no response, give no server response error
        if (!err?.response) {
            setErrMsg('No Server Response');
            //if there's a 400 error, give missing user error
        } else if (err.response?.status === 400){
            setErrMsg('Please enter a username or passowrd');
            //if 401 error give unauthorized error
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized ');
            //if it's none of these, give a retry error
        } else {
            setErrMsg('Oops, looks like that didn\'t work. Try again?');
        }
        errRef.current.focus();
    }
   };

   const handleUserInput = (e) => setUser(e.target.value)
   const handlePswrdInput = (e) => setPswrd(e.target.value)
  

   const content = isLoading? <h1>Loading...</h1> : (
    <section className="unblockMe--login">
        {/* error is displayed at top */}
        <h3 className="text-center text-2xl">
            unblock<span className="font-semibold">Me</span>
        </h3>
        <h1 id='unblockMe--public-title' className="unblockMe--public-title text-center">
            <span className='unblockMe--public-title unblockMe--public-title-word-1'>
                Log
            </span>
            <span className='unblockMe--public-title unblockMe--public-title-word-2'>
                &nbsp;in
            </span>
        </h1>
        <p ref={ errRef } className= { errMsg ? "appear" : "offscreen" }></p>
        <form className="unblockMe--form" onSubmit= { handleSubmit }>
            <FloatingLabel 
                htmlFor="username" 
                variant="standard" 
                label="Username"
                type="text"
                id="username"
                ref={ userRef }
                value= { user }
                autoComplete="off"
                aria-describedby="userlogin"
                onChange={ handleUserInput }
                className="mb-4"
                required>
            </FloatingLabel>
            <p id="userlogin" className={ userFocus? "appear" : "offscreen" }>
                Please enter a username
            </p>
            <FloatingLabel 
                htmlFor="password" 
                variant="standard" 
                label="Password"
                type="text"
                id="password"
                ref={ pswrdRef }
                value= { pswrd }
                autoComplete="off"
                aria-describedby="userPswrd"
                onChange={ handlePswrdInput }
                className="mb-4"
                required>
            </FloatingLabel>
            <p id="userlogin" className={ pswrdFocus ? "appear" : "offscreen" }>
                Enter a password
            </p>
            <Button size="xl" className="w-full" type="submit" color="dark">
                Login
            </Button>
        </form>
    </section>
   )

    return content

}

export default Login