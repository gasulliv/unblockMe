import {Route, Routes} from 'react-router-dom'
import 'jquery/dist/jquery.min.js'
import SignUp from './SignUp/sign-up'
import Login from './Login/login'
import Dashboard from './Dashboard/dashboard'
import NavBar from './NavBar/NavBar'
import NavBarSignedIn from './NavbarSignedIn/NavbarSignedIn'
import Home from './Home/Home';
import PageMissing from './404/PageMissing';
import './index.css'

function App() {
  
  return (
    <>
      <NavBar />
      {/* <NavBarSignedIn /> */}
      <Routes>
        <Route path="*" element={<PageMissing />}></Route>
        <Route path="/" element={ <Home />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App
