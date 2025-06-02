import React from 'react'

export const Input = ({text, onChange, type, value, textarea, name}) => {
  return (
            <span className='flex flex-col gap-1 justify-between'>
                <label className='font-medium'>{text}: </label>
                { textarea ?
                <textarea name={name} required onChange={onChange} className='border-1 rounded p-1 ' type={type} value={value} /> :
                <input name={name} required onChange={onChange} className='border-1 rounded p-1 ' type={type} value={value} /> }
            </span>
  )
}
