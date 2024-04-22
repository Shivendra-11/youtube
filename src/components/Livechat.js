import React, { useEffect } from 'react'
import Chatmessage from './Chatmessage'
import {useDispatch, useSelector} from "react-redux"
import { addMessage } from '../utils/Chatslice';


const Livechat = () => {
    const dispatch=useDispatch();
    const Chats=useSelector((state)=>state.chat.messages);
    useEffect(()=>{
       const i = setInterval(() => {
            // console.log("hello")
            dispatch(addMessage({
           name:"shivendra ",
           message:"hello jee kya haal chal bdiya ekdum 😂",     
            }));
        }, 2000);
        return ()=>clearInterval(i);
    
    },[]);
  return (
    
    <div className= 'ml-2  flex-col p-2 bg-slate-100  rounded-lg border-black border   h-[600px]  ' >
        {/* Dont use indexes as a key */}

{
  Chats.map((c,i)=>  <Chatmessage  key={i} name={c.name} message={c.message}  />)
}
        
      
        

      
    

    </div>
    
  )
}

export default Livechat;
