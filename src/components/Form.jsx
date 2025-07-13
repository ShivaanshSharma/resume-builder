import React, { useRef, useState, useEffect } from 'react';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { Resume } from './Resume';
import { Input } from './Input';
import { Experience } from './Experience';
import { Project } from './Project';
import { Education } from './Education';

export const Form = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        about: '',
        experience: 0,
        project: 0,
        skills: '',
        extras: '',
        education: 0,
    });

    const [experienceDetails, setExperienceDetails] = useState([]);
    const [projectDetails, setProjectDetails] = useState([]);
    const [educationDetails, setEducationDetails] = useState([]);
    const [validation, setValidation] = useState(false);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const newExperience = Array.from({length: form.experience}, (_, index) => {
            return experienceDetails[index] || { title: '', duration: '', description: '' };
        });
        
          setExperienceDetails(newExperience);
    }, [form.experience]);

    useEffect(() => {
        const newProject = Array.from({length: form.project}, (_, index) => {
            return projectDetails[index] || { name: '', description: '' };
        });
        setProjectDetails(newProject);
    }, [form.project]);

    useEffect(() => {
        const newEducation = Array.from({length: form.education}, (_, index) => {
            return educationDetails[index] || { title: '', description: '' }
        })
        setEducationDetails(newEducation);
    }, [form.education]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevForm => ({
        ...prevForm,
        [name]: value
    }));
    }

    const downloadHandler = () => {
        if (name.length > 0) {
            setValidation(true);
        }
    }

    const validationHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        setInterval(() => {
            setLoading(false);
            setValidation(true);
        }, 3000)
    }

  return (
    <>
    <div className='lg:min-w-112 md:min-w-112 sm:min-w-112 mx-auto my-12 w-fit bg-white px-6 pt-6 pb-3 rounded-2xl shadow-xl min-w-85  '>
        <form className='flex flex-col gap-2' onSubmit={validationHandler}>
            <span className='text-2xl mb-3 text-center'>Enter your details</span>
            <Input text="Name" name='name' type="text" onChange={handleChange} value={form.name} />
            <Input text="Email" name='email' type="email" onChange={handleChange} value={form.email} />
            <Input text="Phone" name='phone' type="number" onChange={handleChange} value={form.phone} />
            <Input text="Role" name='role' type="text" onChange={handleChange} value={form.role} />
            <Input text="Profile" name='about' type="text" onChange={handleChange} value={form.about} textarea={true}/>
            <Input text="No of Experience" name='experience' type="number" onChange={handleChange} value={form.experience} />
            
            { form.experience > 0 ? 

            <span className='flex flex-col gap-3'>
                {
                    experienceDetails.map((exp, index) => { return (
                        <Experience key={index} exp={exp} index={index} experienceDetails={experienceDetails} onUpdate={setExperienceDetails} />
                    )})
                }
            </span>

            : null }

            <Input name='project' text="No of Projects" type="number" onChange={handleChange} value={form.project} />

            { form.project > 0 ? 

            <span className='flex flex-col gap-3'>
                {
                    projectDetails.map((prj, index) => { return (
                        <Project prj={prj} index={index} projectDetails={projectDetails} onUpdate={setProjectDetails} />
                    )})
                }
            </span>

            : null }

            <Input name='skills' type='text' text='Skills' value={form.skills} onChange={handleChange} textarea={true} />
            <Input name='education' type='number' text='No of Degrees' value={form.education} onChange={handleChange} />

            <span className='flex flex-col gap-3'>
                {
                    educationDetails.map((edu, index) => { return (
                        <Education edu={edu} index={index} educationDetails={educationDetails} onUpdate={setEducationDetails} />
                    )})
                }
            </span>

            <Input name='extras' type='text' textarea={true} text='Awards/Certificates/Language' value={form.extras} onChange={handleChange} />

            {!validation && 
            <div className='text-center w-12/12 mt-3 p-3'>
                <button className='duration-150 cursor-pointer border-1 p-3 rounded-xl bg-gray-700 text-white hover:bg-white hover:text-gray-700'>{ loading ? 'Generating...' : 'Generate PDF' }</button>
            </div> }

        </form>

            {validation && <div className='text-center w-12/12 mt-3 p-3'>   
                
                <PDFDownloadLink document={<Resume useExtras={form.extras} useSkills={form.skills} useName={form.name} usePhone={form.phone} useRole={form.role} useEmail={form.email} useAbout={form.about} useExperience={experienceDetails} useProject={projectDetails} useEducation={educationDetails}/> } fileName='resume.pdf'>
                    <button onClick={downloadHandler} className=' duration-150 cursor-pointer border-1 p-3 rounded-xl bg-gray-700 text-white hover:bg-white hover:text-gray-700'>Download Resume</button>
                </PDFDownloadLink> 

            </div>}

    </div>
    </>
  )
}
