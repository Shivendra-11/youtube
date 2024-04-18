import React from 'react'
import Button from './Button'
const list=["All","cricket","Desigamer","Football" ,"Total ","Doram on","Soccer","Laptop","Harsh","Mafiya","physicwallah"]
const Buttonlist = () => {
  return (
    <div className='flex' >
      {
        list.map((value)=>{
          return <Button name={value} />   
        })  
      }

    </div>
  )
}

export default Buttonlist;
