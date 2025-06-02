import React from 'react'

export const Experience = ({exp, index, experienceDetails, onUpdate}) => {
  return (
                            <span key={index} className='flex flex-col gap-2'>
                            <input 
                                type='text'
                                value={exp.title}
                                placeholder={`Experience ${index+1}`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...experienceDetails];
                                    updated[index].title = e.target.value;
                                    onUpdate(updated);
                                }}
                            />
                            <input 
                                type='text'
                                value={exp.duration}
                                placeholder={`Duration ${index+1}`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...experienceDetails];
                                    updated[index].duration = e.target.value;
                                    onUpdate(updated);
                                }}
                            />
                            <textarea 
                                type='text'
                                value={exp.description}
                                placeholder={`Description ${index+1}`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...experienceDetails];
                                    updated[index].description = e.target.value;
                                    onUpdate(updated);
                                }}
                            />
                        </span>
  )
}
