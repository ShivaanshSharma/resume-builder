import React from 'react'
import Office from '../assets/office.jpg';
import { Button } from './Button';

export const Home = () => {
  return (
    <div className='flex mx-24 flex-col my-36'>
      <span className='flex flex-col'>
        <span className='text-6xl font-medium text-white leading-tight'>Your story deserves a spotlight...<br />Let your resume speak before you do.</span>
        <Button text="Create your resume now!" />
      </span>
    </div>
  )
}
