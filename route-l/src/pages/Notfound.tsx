import React from 'react'
import {useParams} from 'react-router-dom'
export const Notfound = () => {
    const {id} =useParams();
  return (
    <div>
        {id}
        <img className='w-fit object-cover' src='./src/assets/404-error.png'/>
        
    </div>
  )
}
