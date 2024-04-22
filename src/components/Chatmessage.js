import React from 'react'

const Chatmessage = ({name,message}) => {
  return (
    <div className=' flex items-center  shadow-sm p-2 ' >
   
<img  className='h-6   '  src="https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg" alt="User" />
     
       <span className='px-2 font-bold' >{name} :</span>
      <span>{message}</span>
     
      </div> 
      
     
    
 
  )
}

export default Chatmessage
