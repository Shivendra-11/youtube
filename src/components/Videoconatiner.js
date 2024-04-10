import React, { useEffect, useState } from 'react';
import { YOUTUBE_POPULAR_VIDEOS } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

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
  {videos.map(video=>
  
  <Link to={"/watch?v="+video.id}>
     <Videocard  key={video.id} info={video}/>
     </Link>)}
 
 </div>
  )
}

export default Videoconatiner;
