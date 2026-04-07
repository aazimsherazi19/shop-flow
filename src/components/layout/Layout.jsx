import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='min-h-screen flex flex-col bg-white'>

        <Navbar/>

        <main className='grow'>
            <Outlet/>
        </main>
      
      <Footer/>
    </div>
  )
}

export default Layout
