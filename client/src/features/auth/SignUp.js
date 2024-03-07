import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import '../../components/public.css'
import { FloatingLabel, Button } from 'flowbite-react'

//requires that usernames start with either upper or lower case letters and followed by 3 to 10 characters either lowercase, uppercase or numbers 0 to 9
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,}$/g;
//requires at least one lowercase, one uppercase, one number and one special character must be at least 8 characters long
const PSWRD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*?\d)(?=.*[0-9])(?=.*[!@#$%]).{8,}$/g;

const SignUp = () => {

     //set focus on form 
     //for accessibility
     const userRef = useRef();
     const pswrdRef = useRef();
     const errRef = useRef();  
     
     //set states for username, password, error, success message and match password
     const [ user, setUser ] = useState('');
     const [ validName, setValidName ] = useState(false);
     const [ userFocus, setUserFocus ] = useState(false);

     const [ pswrd, setPswrd ] = useState('');
     const [ validPswrd, setValidPswrd ] = useState(false);
     const [ pswrdFocus, setPswrdFocus ] = useState(false);

     const [ matchPswrd, setMatchPswrd ] = useState('');
     const [ validMatch, setValidMatch ] = useState(false);
     const [ matchFocus, setMatchFocus ] = useState(false);

     const [ errMsg, setErrMsg ] = useState('');
     const [ successMsg, setSuccessMsg ] = useState(false);

    useEffect(() => {
        //sets focus on the username on page load
        userRef.current.focus();
    }, []); 

    useEffect(() => {
        //validates username
        //console log results
        const result = USER_REGEX.test(user);
        console.log(USER_REGEX)
        console.log(user)
        setValidName(result);
        console.log(result);
        //add user state to dependency array, so any time it changes, it will be validated
    }, [ user ]); 

    useEffect(() => {
        //validates password
        //putting password validation and match in the same useEffect allows password match and password validation 
        //to remain in sync!
        const result = PSWRD_REGEX.test( pswrd );
        setValidPswrd( result );
        //return a boolean named match that compares the password to the match password
        const match = pswrd === matchPswrd;
        setValidMatch( match );
        //add user state to dependency array, so any time it changes, it will be validated
    }, [ pswrd, matchPswrd ]); 


    useEffect(() => {
        //empties out error message whenever user, password and match password change
        //since user has probably read the message
        setErrMsg('');
    }, [ user, pswrd, matchPswrd ]);

    const handleUserInput = (e) => setUser(e.target.value)
    const handlePswrdInput = (e) => setPswrd(e.target.value)

    const content = (
        <section className="unblockMe--login">
            {/* if an error appears, add a classname of errmsg, making the message appear
            if there is no error, add a class of offscreen to move message off screen but keep 
            it available to screen readers*/}
            <p ref={ errRef } 
            className= { errMsg ? "errmsg" : "offscreen" } 
            aria-live="assertive">
                { errMsg }
            </p>
            <h3 className="text-center text-2xl">
                unblock<span className="font-semibold">Me</span>
            </h3>
            <h1 id='unblockMe--public-title' className="unblockMe--public-title text-center">
                <span className='unblockMe--public-title unblockMe--public-title-word-1'>
                    Get
                </span>
                <span className='unblockMe--public-title unblockMe--public-title-word-2'>
                    &nbsp;Started
                </span>
            </h1>
            <form className="unblockMe--form">
                <FloatingLabel 
                    htmlFor="username" 
                    variant="standard" 
                    label="Username"
                    type="text"
                    id="username"
                    //allows us to set focus for ada
                    ref={ userRef }
                    autoComplete="off"
                    onChange={ handleUserInput }
                    aria-invalid = { validName ? "false" : "true" }
                    aria-describedby="userNote"
                    onFocus={ () => setUserFocus(true) }
                    onBlur = { () => setUserFocus(false)}
                    className="mb-4"
                    required>
                </FloatingLabel>
                <p id="userNote" className={ userFocus && user && !validName? "appear" : "offscreen" }>
                    Enter a username, usernames should start with 
                    an upper or lowercase letter and be 4 to 24 characters long
                </p>
                <FloatingLabel 
                    htmlFor="password" 
                    variant="standard" 
                    label="Password"
                    type="password"
                    id="password"
                    ref={ pswrdRef }
                    autoComplete="off"
                    onChange={ handlePswrdInput }
                    aria-invalid = { validPswrd ? "false" : "true" }
                    aria-describedby="userNote"
                    onFocus={ () => setUserFocus(true) }
                    onBlur = { () => setUserFocus(false) }
                    className="mb-4"
                    required>
                </FloatingLabel>
                <p id="pswrdNote" className={ userFocus && pswrd && !validPswrd? "appear" : "offscreen" }>
                    Enter a password, passwords should start with 
                    an uppercase letter, contain at least one number, one special character,
                    and be 8 to 24 characters long
                </p>
                <Button size="xl" className="w-full" type="submit" color="dark">
                    Login
                </Button>
            </form>
        </section>
       )

    return content

}

export default SignUp