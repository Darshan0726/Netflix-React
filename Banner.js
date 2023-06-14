import React, { useState } from 'react'
import img from './images/img.jpg'
import logo from './images/logo.jpg'

function Banner() {
  const [headerDark,setDark]=useState(false)

  window.onscroll=()=>{
    if(window.scrollY>150){
      setDark(true)
    }
    else setDark(false)
  }
  return (
    <nav className={headerDark ? "dark":""}>
        <img src={img} alt='img'/>
        <img src={logo} alt='logo'/>
    </nav>
  )
}

export default Banner