import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout
