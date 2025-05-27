import React from 'react'

export const Button = ({text}) => {
  return (
    <button className='border-1 border-transparent duration-150 cursor-pointer w-fit my-3 bg-gray-700 text-white p-3 rounded-xl hover:bg-transparent hover:border-white'>
        {text}
    </button>
  )
}
