import React from 'react'

export const Project = ({prj, index, projectDetails, onUpdate}) => {
  return (
                            <span key={index} className='flex flex-col gap-2'>
                            <input 
                                required
                                type='text'
                                value={prj.name}
                                placeholder={`Project ${index+1} Name`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...projectDetails];
                                    updated[index].name = e.target.value;
                                    onUpdate(updated);
                                }}
                            />
                            <textarea 
                                required
                                type='text'
                                value={prj.description}
                                placeholder={`Project ${index+1} Description`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...projectDetails];
                                    updated[index].description = e.target.value;
                                    onUpdate(updated);
                                }}
                            />
                        </span>
  )
}
