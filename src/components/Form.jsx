import React, { useRef, useState, useEffect } from 'react';

import { Document, Page, PDFViewer, View, Text, PDFDownloadLink } from '@react-pdf/renderer';
import { Resume } from './Resume';

export const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [about, setAbout] = useState('');
    const [experience, setExperience] = useState(0);
    const [project, setProject] = useState(0);
    const [skills, setSkills] = useState('');
    const [extras, setExtras] = useState('');
    const [experienceDetails, setExperienceDetails] = useState([]);
    const [projectDetails, setProjectDetails] = useState([]);
    const [education, setEducation] = useState(0);
    const [educationDetails, setEducationDetails] = useState([]);
    
    useEffect(() => {
        const newExperience = Array.from({length: experience}, (_, index) => {
            return experienceDetails[index] || { title: '', duration: '', description: '' };
        });
        
          setExperienceDetails(newExperience);
    }, [experience]);

    useEffect(() => {
        const newProject = Array.from({length: project}, (_, index) => {
            return projectDetails[index] || { name: '', description: '' };
        });
        setProjectDetails(newProject);
    }, [project]);

    useEffect(() => {
        const newEducation = Array.from({length: education}, (_, index) => {
            return educationDetails[index] || { title: '', description: '' }
        })
        setEducationDetails(newEducation);
    }, [education]);

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
    }

    const roleChangeHandler = (e) => {
        setRole(e.target.value);
    }

    const experienceChangeHandler = (e) => {
        setExperience(Number(e.target.value));
    }

    const projectChangeHandler = (e) => {
        setProject(Number(e.target.value));
    }

    const skillsChangeHandler = (e) => {
        setSkills(e.target.value);
    }

    const extrasChangeHandler = (e) => {
        setExtras(e.target.value);
    }

    const educationChangeHandler = (e) => {
        setEducation(Number(e.target.value));
    }

  return (
    <>
    <div className='mx-auto my-12 w-fit bg-white px-6 pt-6 pb-3 rounded-2xl shadow-xl '>
        <form className='flex flex-col gap-3 text-center'>
            <span className='text-2xl mb-3'>Enter your details</span>
            <span className='flex flex-row gap-3 justify-between items-center'>
                <label>Name: </label>
                <input onChange={nameChangeHandler} className='border-1 rounded p-1 w-xs' type='text'/>
            </span>
            <span className='flex flex-row gap-3 justify-between items-center'>
                <label>Email: </label>
                <input onChange={emailChangeHandler} className='border-1 rounded p-1 w-xs' type='text'/>
            </span>
            <span className='flex flex-row gap-3 justify-between items-center'>
                <label>Phone: </label>
                <input onChange={phoneChangeHandler} className='border-1 rounded p-1 w-xs' type='text'/>
            </span>
            <span className='flex flex-row gap-3 justify-between items-center'>
                <label>Role: </label>
                <input onChange={roleChangeHandler} className='border-1 rounded p-1 w-xs' type='text'/>
            </span>
            <span className='flex flex-row gap-3 items-center justify-between'>
                <label>Profile: </label>
                <textarea onChange={aboutChangeHandler} className='border-1 rounded p-1 w-xs' type='text'/>
            </span>
            <span className='flex flex-row gap-3 justify-between items-center'>
                <label>No of Experience: </label>
                <input className='border-1 rounded p-1 w-xs' value={experience} type='number' onChange={experienceChangeHandler}/>
            </span>
            { experience > 0 ? 

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
                            <textarea 
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
            : null }
            <span className='flex flex-row gap-3 justify-between items-center'>
                <label>No of projects: </label>
                <input className='border-1 rounded p-1 w-xs' value={project} type='number' onChange={projectChangeHandler}/>
            </span>

            { project > 0 ? 

            <span className='flex flex-col gap-3'>
                {
                    projectDetails.map((prj, index) => { return (
                        <span key={index} className='flex flex-col gap-2'>
                            <input 
                                type='text'
                                value={prj.name}
                                placeholder={`Project ${index+1} Name`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...projectDetails];
                                    updated[index].name = e.target.value;
                                    setProjectDetails(updated);
                                }}
                            />
                            <textarea 
                                type='text'
                                value={prj.description}
                                placeholder={`Project ${index+1} Description`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...projectDetails];
                                    updated[index].description = e.target.value;
                                    setProjectDetails(updated);
                                }}
                            />
                        </span>
                    )})
                }
            </span>
            : null }

            <span className='flex flex-row gap-3 justify-between items-center'>
                <label>Skills: </label>
                <textarea className='border-1 rounded p-1 w-xs' value={skills} type='text' onChange={skillsChangeHandler}/>
            </span>

            <span className='flex flex-row gap-3 justify-between items-center'>
                <label>No of Degrees: </label>
                <input className='border-1 rounded p-1 w-xs' value={education} type='number' onChange={educationChangeHandler}/>
            </span>

            <span className='flex flex-col gap-3'>
                {
                    educationDetails.map((edu, index) => { return (
                        <span key={index} className='flex flex-col gap-2'>
                            <input 
                                type='text'
                                value={edu.title}
                                placeholder={`Degree ${index+1} Name`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...educationDetails];
                                    updated[index].title = e.target.value;
                                    setEducationDetails(updated);
                                }}
                            />
                            <textarea 
                                type='text'
                                value={edu.description}
                                placeholder={`Degree ${index+1} Description`}
                                className='border rounded p-1 w-full'
                                onChange={(e) => {
                                    const updated = [...educationDetails];
                                    updated[index].description = e.target.value;
                                    setEducationDetails(updated);
                                }}
                            />
                        </span>
                    )})
                }
            </span>

            <span className='flex flex-row gap-3 justify-between items-center'>
                <label>Awards/Certificates/Language: </label>
                <textarea className='border-1 rounded p-1 w-xs' value={extras} type='text' onChange={extrasChangeHandler}/>
            </span>

        </form>
    </div>
    <PDFViewer width="100%" height="100%">
        <Resume useExtras={extras} useSkills={skills} useName={name} usePhone={phone} useEmail={email} useRole={role} useAbout={about} useExperience={experienceDetails} useProject={projectDetails} useEducation={educationDetails} />
    </PDFViewer>
    <PDFDownloadLink document={<Resume useExtras={extras} useSkills={skills} useName={name} usePhone={phone} useRole={role} useEmail={email} useAbout={about} useExperience={experienceDetails} useProject={projectDetails} useEducation={educationDetails}/> } fileName='resume.pdf'>
        <button>Download</button>
    </PDFDownloadLink>
    </>
  )
}
