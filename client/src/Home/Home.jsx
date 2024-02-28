import SignUp from '../SignUp/sign-up'
import Login from '../Login/login'
import Dashboard from '../Dashboard/dashboard'
import {Route, Routes} from 'react-router-dom'
import NavBar from '../NavBar/NavBar';

function App() {

  return (
    <>
    <h1>Welcome to Prompt Me!</h1>
    <h3>Let's get started</h3>
      <SignUp />
    </>
  )
}

export default App