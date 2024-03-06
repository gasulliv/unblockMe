import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice"; 


const Login = () => {
    //set focus on form at correct time
    const userRef = userRef();
    const errRef = errRef();
    //states for user, password and error message
    const [ user, setUser ] = useState('');
    const [ pswrd, setPswrd ] = useState('');
    const [ errMsg, setErrMsg ] = useState('');
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

   const handleSubmit = aysnc (e) => {
    e.preventDefault();

    try {
        //unwrap allows use of react tool kit
        const userData = await login({ user, pswrd }).unwrap();
        dispatch(setCredentials({ ...userData, user }))
        setUser('')
        setPwd('')
        navigate('/dashboard')
    } catch (err) {
        if (!err?.response) {
            setErrMsg('No Server Response');
        } else if (err.response?.status === 400){
            setErrMsg('Please enter a username or passowrd');
        } else if (err.response?.status === 401) {
            setErrMsg('Unauthorized ');
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
        <p ref= { errRef } className= { errMsg ? "errmsg" : "offscreen" }></p>
        <h1>Welcome Back!</h1>
        <form onSubmit= { handleSubmit }>
            <label htmlFor="username">
                Username:
            </label>
            <input 
                type="text"
                id="username"
                ref={ username }
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
                ref={ password }
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