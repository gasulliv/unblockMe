
import { NavLink } from 'react-router-dom'
import { Navbar } from 'flowbite-react';
import { Link } from 'react'

function NavBar() {

  return (
    <>
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
    </Navbar>
    </>
  )
}

export default NavBar