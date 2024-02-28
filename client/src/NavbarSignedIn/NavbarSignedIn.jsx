
import { NavLink } from 'react-router-dom'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

function NavBar() {

  return (
    <>
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" 
            img="/../../public/Avahnotia.jpg" 
            rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Story Dashboard</Dropdown.Item>
          <Dropdown.Item>My Stories</Dropdown.Item>
          <Dropdown.Item>My Favorites</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Dashboard</Navbar.Link>
        <Navbar.Link href="#">Story Dashboard</Navbar.Link>
        <Navbar.Link href="#">My Stories</Navbar.Link>
        <Navbar.Link href="#">My Favorites</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavBar

