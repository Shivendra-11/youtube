import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closemenu } from '../utils/appslice';
import { useParams, useSearchParams } from 'react-router-dom';

const Watchpage = () => {
const [searchParam]=useSearchParams();
console.log(searchParam.get("v"));


  
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(closemenu());
  })

  return (
   
    <div>
  <iframe width="560" 
  height="315" 
  src={"https://www.youtube.com/embed/"+searchParam.get("v")}
   title="YouTube video player" 
   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

   </iframe>
    </div>
  )
}

export default Watchpage;
