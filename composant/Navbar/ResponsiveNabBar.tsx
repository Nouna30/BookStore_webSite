"use client"

import React, { useState } from 'react'
import NavBar from './NavBar'
import MobileNavBar from './MobileNavBar'



const ResponsiveNabBar = () => {

    const [showNav , setShowNav] = useState(false);

    const openNav = () => setShowNav(true)
    const closeNav = () => setShowNav(false)


  return (
    <div>
      <NavBar openNav={openNav} />
      <MobileNavBar showNav={showNav} closeNav={closeNav} />
    </div>
  )
}

export default ResponsiveNabBar
