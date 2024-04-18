import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closemenu } from '../utils/appslice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
const Watchpage = () => {
const [searchParam]=useSearchParams();
console.log(searchParam.get("v"));


  
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(closemenu());
  })

  return (
   <div className='felx flex-col'>
    <div>
  <iframe width="850" 
  height="460" 
  src={"https://www.youtube.com/embed/"+searchParam.get("v")}
   title="YouTube video player" 
   frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

   </iframe>
    </div>
     {/* <CommentsContainer/> */}
     <CommentContainer/>
    </div>
  )
}

export default Watchpage;
