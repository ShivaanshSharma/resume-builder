import React from 'react'

export const Education = ({edu, index, educationDetails, onUpdate}) => {
  return (
                            <span key={index} className='flex flex-col gap-2'>
                            <input 
                                required
                                type='text'
                                value={edu.title}
                                placeholder={`Degree ${index+1} Name`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...educationDetails];
                                    updated[index].title = e.target.value;
                                    onUpdate(updated);
                                }}
                            />
                            <textarea 
                                required
                                type='text'
                                value={edu.description}
                                placeholder={`Degree ${index+1} Description`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...educationDetails];
                                    updated[index].description = e.target.value;
                                    onUpdate(updated);
                                }}
                            />
                        </span>
  )
}
