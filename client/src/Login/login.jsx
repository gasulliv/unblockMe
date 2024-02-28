import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function Login({ setToken }) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/login', {username, password})
      .then(result => {
        console.log(result)
        if(result.data === "Success") {
            navigate('/dashboard');
            setToken(token)
        } else {
            alert("Incorrect Password")
        }
      })
      .catch(err => console.log(err)); 
    }

  return (
    <>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form 
      class="space-y-6" 
      action="#" 
      method="POST"
      onSubmit={handleSubmit}>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
            <input 
              onChange={(e) => setUsername(e.target.value)} 
              id="email" name="email" 
              type="email" 
              autocomplete="email" 
              required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              />
        </div>
    </div>

    <div>
      <div class="flex items-center justify-between">
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div class="text-sm">
          <Link 
          href="#" 
          to="/forgot-password" 
          class="font-semibold text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </Link>
        </div>
      </div>

      <div class="mt-2">
        <input 
            onChange={(e) => setUsername(e.target.value)} 
            id="password" 
            name="password" 
            type="password" 
            autocomplete="current-password" 
            required 
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        />
      </div>
    </div>

    <div>
      <button 
        type="submit" 
        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Sign in
      </button>
    </div>
    </form>
  </div>
</div>
    </>
  )
}
export default Login
