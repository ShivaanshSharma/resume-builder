import React from 'react'

export const Button = ({text, ...props}) => {
  return (
    <button {...props} className='border-1 border-transparent duration-150 cursor-pointer w-fit my-6 bg-gray-700 text-white px-3 py-2 rounded-xl hover:bg-transparent hover:border-white'>
        {text}
    </button>
  )
}
