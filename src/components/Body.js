import React from 'react'
import Sidebar from './Sidebar'
import Buttonlist from './Buttonlist'
import Maincontainer from './Maincontainer'
import Videoconatiner from './Videoconatiner'
import {Outlet} from "react-router-dom"

const Body = () => {
  return (
    <>
  
    <div className='flex' >
      <Sidebar/>
    <Maincontainer/> 
     
    </div>

  

    </>
    
  )
}

export default Body
