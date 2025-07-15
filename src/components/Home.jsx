import React from 'react'
import Office from '../assets/office.jpg';
import { Button } from './Button';


export const Home = ({onChange}) => {
  return (
    <div className='flex flex-col h-120 lg:h-130 justify-around'>
      <span className='flex flex-col mx-8'>
        <span className='text-2xl lg:text-5xl md:text-4xl font-bold text-shadow-black text-white leading-tight'>Your story deserves a spotlight...<br />Let your resume speak before you do.</span>
        <Button onClick={onChange} text="Create your resume now!" />
      </span>
    </div>
  )
}
