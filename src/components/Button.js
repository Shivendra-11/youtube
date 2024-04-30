import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <div>
        <button className='bg-red-500 hover:bg-gray-300 text-black-900 border-black rounded-lg border-2 px-6 m-2 ' >
            {name}
        </button>
      </div>
    </div>
  )
}

export default Button;
