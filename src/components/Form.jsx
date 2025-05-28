import React, { useRef, useState } from 'react';

import { Document, Page, PDFViewer, View, Text, PDFDownloadLink } from '@react-pdf/renderer';
import { Resume } from './Resume';

export const Form = () => {

    const [name, setName] = useState();

    const nameChangeHandler = (e) => {
        setName(e.target.value);
        console.log(name);
    }

  return (
    <>
    <div className='mx-auto my-12 w-fit bg-white p-6 rounded-2xl shadow-xl'>
        <form className='flex flex-col gap-3 text-center'>
            <span className='text-xl mb-3'>Enter your details</span>
            <span>
                <label>Name: </label>
                <input onChange={nameChangeHandler} className='border-1 rounded p-1' type='text'/>
            </span>
            <span>
                <label>Email: </label>
                <input className='border-1 rounded p-1' type='text'/>
            </span>
            <span>
                <label>Phone: </label>
                <input className='border-1 rounded p-1' type='text'/>
            </span>
        </form>
    </div>
    <PDFViewer>
        <Resume useName={name}/>
    </PDFViewer>
    </>
  )
}
