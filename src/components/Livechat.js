import React, { useEffect, useState } from 'react'
import Chatmessage from './Chatmessage'
import {useDispatch, useSelector} from "react-redux"
import { addMessage } from '../utils/Chatslice';
import { generateRandomName, makeRandomChat } from '../utils/Helper';
 


const Livechat = () => {
  const [LiveMessage,setLiveMessage]=useState("");
    const dispatch=useDispatch();
    const Chats=useSelector((state)=>state.chat.messages);
    useEffect(()=>{
       const i = setInterval(() => {
            // console.log("hello")
            dispatch(addMessage({
           name:generateRandomName(),
           message:makeRandomChat(25) ,     
            }));
        }, 2000);
        return ()=>clearInterval(i);
    
    },[]);
  return (
    <>
    <div className= 'ml-2   p-2 bg-slate-100 flex overflow-y-scroll flex-col-reverse rounded-lg border-black border   h-[600px]  ' >
        {/* Dont use indexes as a key */}

{
  Chats.map((c,i)=>  <Chatmessage  key={i} name={c.name} message={c.message}  />)
}
    
    </div>
    <form className='w-full p-2 ml-2 border border-black '
     onSubmit={(e)=>{
      e.preventDefault();
      //  console.log("hello jee")
      dispatch(
        addMessage({
        name:"Shivendra keshari",
        message:LiveMessage,
      }));
      setLiveMessage("");
      }}
       
       >
      <input className='w-[400px] p-2 '  type="text"  value={LiveMessage} onChange={(e)=>setLiveMessage(e.target.value)}  />
      <button className='px-2 mx-2 bg-green-500' >Send</button>
    </form>
    </>
  )
}

export default Livechat;
