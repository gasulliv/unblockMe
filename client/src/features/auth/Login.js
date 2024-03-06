import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice"; 


const Login = () => {
    //set focus on form at correct time
    const userRef = useRef();
    const pswrdRef = useRef();
    const errRef = useRef();
    //states for user, password and error message
    const [ user, setUser ] = useState('');
    const [ pswrd, setPswrd ] = useState('');
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
        <p ref={ errRef } className= { errMsg ? "errmsg" : "offscreen" }></p>
        <h1>Welcome Back!</h1>
        <form onSubmit= { handleSubmit }>
            <label htmlFor="username">
                Username:
            </label>
            <input 
                type="text"
                id="username"
                ref={ userRef }
                value= { user }
                onChange={ handleUserInput }
                required>
            </input>
            <label htmlFor="password">
                Password:
            </label>
            <input 
                type="text"
                id="password"
                ref={ pswrdRef }
                value= { pswrd }
                onChange={ handlePswrdInput }
                required>
            </input>
            <button type="submit">Login</button>
        </form>
    </section>
   )

    return content

}

export default Login