import React, { useRef, useState } from 'react';

import { Document, Page, PDFViewer, View, Text, PDFDownloadLink } from '@react-pdf/renderer';
import { Resume } from './Resume';

export const Form = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [about, setAbout] = useState();
    const [experience, setExperience] = useState();

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
        setExperience(e.target.value);
        console.log(experience);
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
                    {Array.from({ length: experience }).map((_,index) => (
                        <input type='text' className='border-1 rounded p-1 w-full' placeholder={`Experience ${index+1}`} />
                    ))}
            </span>
        </form>
    </div>
    <PDFViewer width="100%" height="100%">
        <Resume useName={name} usePhone={phone} useEmail={email} useAbout={about} />
    </PDFViewer>
    </>
  )
}
