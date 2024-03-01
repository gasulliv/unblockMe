import React, { useState} from 'react'
import { Button, Sidebar, Card } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import UnBlockCard from '../UnBlockCard/unblockcard';
import Login from '../Login/login';


function Dashboard() {

  // const [token, setToken] = useState();

  // if(!token){

  //     { return <Login setToken={setToken}/> }
      
  // }
  return (
    <>
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img="/favicon.svg" imgAlt="Flowbite logo">
        Unblock Me
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            My Blocked Stories
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Stories I'm Following
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Favorites
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    <section>
      <div className="container">
        <h1>Hello Username</h1>
      </div>
    </section>
    </>
  )
}


export default Dashboard