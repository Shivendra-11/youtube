import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux';
import { toggleMenu } from '../utils/appslice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
  
      const [Searchquery ,setSearchquery]=useState("");
      const [suggestion,setsuggetsion]=useState([]);
      // console.log(Searchquery);
      useEffect(()=>{
            //  console.log(Searchquery);
            const timer =setTimeout(() => 
              getSearchSuggestion(), 200);   
        // it is used to genrate api call after every 200ms --Debouncing 
              return ()=>{
                clearTimeout(timer);
              }

            },[Searchquery]
    
    )

      


const getSearchSuggestion=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+Searchquery);
    const json= await  data.json();
    console.log(json[1]);
    setsuggetsion(json[1])


}

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
      <a href="/">
      <img  className='h-16  px-3  w-32' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQya1-ejysnJAMUkT6pvRYI0wLQyXD1EgTnaXjGNNN1efL8qjQXPq3xG_QDftQHtTTk2Q&usqp=CAU
      " alt="" />
      </a>
    </div>
    
     <div className=' my-8 text-center ml-20 col-span-8 px-4' >

   <input  className=' hover:bg-gray-200 border-gray-400 w-[400px] text-center  border-2 rounded-l-full border-spacing-x-3  ' type="text"    value={Searchquery}
   onChange={(e)=>setSearchquery(e.target.value)} />

<button className='border-gray-400 rounded-r-full border-2 w-20  hover:bg-gray-200 ' > 🔍  </button>
     
     <div className='relative' >
      <div className=' fixed bg-white py-2 px-5 w-[30rem] '    >
      <ul className='flex-col left-0 ' >
        { 
          suggestion.map((s)=>( <li  key={s} className=' hover:bg-gray-100' >🔍{s}</li>))
        }
       
       
       
        
      </ul>
      </div>
     </div>
    
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
