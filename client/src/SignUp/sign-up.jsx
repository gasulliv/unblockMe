import { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const [username, setUsername] = useState();
  const [personname, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/sign-up', { personname, username, password })
    .then(result => {console.log(result)
        navigate('/dashboard');
    })
    .catch(err => console.log(err));
    
  }
  return (
    <> 
     <div className="unblock-me--main-container grid content-center">
      <div className="unblock-me--container">
        <h1 className="text-center text-2xl">Let's Get Started!</h1>
          <form 
          onSubmit={handleSubmit}
          className="flex max-w-md flex-col gap-4 mx-auto">
            <div>
              <div className="mb-2 block">
                <Label 
                htmlFor="email2" 
                value="Your name" />
              </div>
              <TextInput 
                id="email2" 
                type="text" 
                onChange={(e) => setName(e.target.value)}  
                placeholder="Your Name" 
                required 
                shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label 
                htmlFor="email2" 
                value="Your email" />
              </div>
              <TextInput 
                id="email2" 
                type="email" 
                onChange={(e) => setUsername(e.target.value)}  
                placeholder="name@flowbite.com" 
                required 
                shadow />
            </div>
            <div>
              <div className="mb-2 block">
                <Label 
                htmlFor="password2" 
                value="Your password" />
              </div>
            <TextInput 
            id="password2" 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
              <Label htmlFor="agree" className="flex">
                I agree with the&nbsp;
                <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500 unblock-me--link">
                  terms and conditions
                </Link>
              </Label>
          </div>
          <Button className="unblock-me--button" type="submit">Register new account</Button>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp

