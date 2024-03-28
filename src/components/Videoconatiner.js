import React, { useEffect, useState } from 'react';
import { YOUTUBE_POPULAR_VIDEOS } from '../utils/constants';
import Videocard from './Videocard';

const Videoconatiner = () => {

const [videos, SetVideos]=useState([]);

  useEffect(() =>{ 
    
    
    getvideos();

}, []) ; 

const getvideos=async()=>{
  const data=await fetch(YOUTUBE_POPULAR_VIDEOS);
  const response=await data.json();
  console.log(response.items);
  SetVideos(response.items);
}

  return (
 <div className='flex flex-wrap ' >
  {videos.map(video=><Videocard  key={video.id} info={video}/>)}
 
 </div>
  )
}

export default Videoconatiner;
