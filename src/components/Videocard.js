import React from 'react';

const Videocard = ({ info }) => {
  console.log(info);
  return ( 

<>
<div className='m-4 p-2 w-60 shadow-lg ' >
  <img src={info.snippet.thumbnails.medium.url} alt='thumbnail' />
  <div>
    <ul>
      <li className='font-bold' > {info.snippet.title}</li>

      <li>{info.snippet.channelTitle}</li>
      <li>{info.statistics.likeCount}</li>
      <li></li>
    </ul>
    

    
  </div>
</div>

</>
  );
  }

export default Videocard;
