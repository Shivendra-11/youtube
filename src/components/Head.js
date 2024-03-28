import React from 'react'
import {useDispatch} from 'react-redux';
import { toggleMenu } from '../utils/appslice';

const Head = () => {
  // const dispatch=useDispatch();

  // const toogleMenuHandler=()=>{

  //   dispatch(toggleMenu());
  // };
  const dispatch = useDispatch(); 
  const toogleMenuHandler = () => { 
    dispatch(toggleMenu()); 
  };  
  return (

  
    <>
    <div className='grid grid-flow-col  m-1 shadow-md ' > 
    {/* {// first div is for logo and   ham burger menu} */}
    <div className='flex m-4 col-span-3 ' >
      <img
      onClick={()=>toogleMenuHandler()
      }
      

      className='h-16 cursor-pointer '  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnfkPGkq2XLleGdgqCXeasaq91xKxJ4VC02IARw5vBw&s" alt="Hamburger menu" />


      {/* logo youtube */}
      <a href="">
      <img  className='h-16  px-3  w-32' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQya1-ejysnJAMUkT6pvRYI0wLQyXD1EgTnaXjGNNN1efL8qjQXPq3xG_QDftQHtTTk2Q&usqp=CAU
      " alt="" />
      </a>
    </div>
    
     <div className=' my-8 text-center ml-20 col-span-8 px-4' >

   <input  className=' hover:bg-gray-200 border-gray-400 w-[400px] text-center  border-2 rounded-l-full border-spacing-x-3  ' type="text" />

<button className='border-gray-400 rounded-r-full border-2 w-20  hover:bg-gray-200 ' > 🔍  </button>

     </div>
     {/* user icon */}
     <div className='px-32 mt-3  col-span-1  ' >
       
<div className='flex flex-row ' >
       
<img  className='h-12  '  src="
https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg" alt="User" />

<img  className='h-12 mx-8 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbdJUELtkbwAqtOpbucjXxvdZnA78qaPPxxCykEQgnrlLs_bt-m_JbXAzaVSeCR_Zhj4&usqp=CAU" alt="" />
 </div>
     </div>
     </div>
    </>
  )
}

export default Head;
