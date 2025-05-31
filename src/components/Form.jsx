import React, { useRef, useState, useEffect } from 'react';

import { Document, Page, PDFViewer, View, Text, PDFDownloadLink } from '@react-pdf/renderer';
import { Resume } from './Resume';

export const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [about, setAbout] = useState('');
    const [experience, setExperience] = useState(0);
    const [experienceDetails, setExperienceDetails] = useState([]);

    useEffect(() => {
        const newExperience = Array.from({length: experience}, (_, index) => {
            return experienceDetails[index] || { title: '', duration: '', description: '' };
        });
        
          setExperienceDetails(newExperience);
    }, [experience])

    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const phoneChangeHandler = (e) => {
        setPhone(e.target.value);
    }

    const aboutChangeHandler = (e) => {
        setAbout(e.target.value);
        console.log(about);
    }

    const experienceChangeHandler = (e) => {
        setExperience(Number(e.target.value));
    }



  return (
    <>
    <div className='mx-auto my-12 w-fit bg-white p-6 rounded-2xl shadow-xl min-w-4/12'>
        <form className='flex flex-col gap-3 text-center'>
            <span className='text-xl mb-3'>Enter your details</span>
            <span className='flex flex-row gap-3 justify-around items-center'>
                <label>Name: </label>
                <input onChange={nameChangeHandler} className='border-1 rounded p-1 w-xs' type='text'/>
            </span>
            <span className='flex flex-row gap-3 justify-around items-center'>
                <label>Email: </label>
                <input onChange={emailChangeHandler} className='border-1 rounded p-1 w-xs' type='text'/>
            </span>
            <span className='flex flex-row gap-3 justify-around items-center'>
                <label>Phone: </label>
                <input onChange={phoneChangeHandler} className='border-1 rounded p-1 w-xs' type='text'/>
            </span>
            <span className='flex flex-row gap-3 items-center'>
                <label>About me: </label>
                <textarea onChange={aboutChangeHandler} className='border-1 rounded p-1 w-xs' type='text'/>
            </span>
            <span className='flex flex-row gap-3 justify-around items-center'>
                <label>Experience: </label>
                <input className='border-1 rounded p-1 w-xs' value={experience} type='number' onChange={experienceChangeHandler}/>
            </span>
            <span className='flex flex-col gap-3'>
                {
                    experienceDetails.map((exp, index) => { return (
                        <span key={index} className='flex flex-col gap-2'>
                            <input 
                                type='text'
                                value={exp.title}
                                placeholder={`Experience ${index+1}`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...experienceDetails];
                                    updated[index].title = e.target.value;
                                    setExperienceDetails(updated);
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
                                    setExperienceDetails(updated);
                                }}
                            />
                            <input 
                                type='text'
                                value={exp.description}
                                placeholder={`Description ${index+1}`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...experienceDetails];
                                    updated[index].description = e.target.value;
                                    setExperienceDetails(updated);
                                }}
                            />
                        </span>
                    )})
                }
            </span>
        </form>
    </div>
    <PDFViewer width="100%" height="100%">
        <Resume useName={name} usePhone={phone} useEmail={email} useAbout={about} useExperience={experienceDetails} />
    </PDFViewer>
    </>
  )
}
