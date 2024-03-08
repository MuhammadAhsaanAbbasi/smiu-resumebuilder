"use client"
import React, { useEffect, useState, FC } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const ResumeForm = () => {
    const router = useRouter();
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const [education, setEducation] = useState({
        degree: '',
        institution: '',
        year: ''
    });

    const [workExperience, setWorkExperience] = useState({
        company: '',
        role: '',
        responsibilities: '',
        duration: ''
    });

    const [skills, setSkills] = useState('');

    const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value
        });
    };

    const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEducation({
            ...education,
            [e.target.name]: e.target.value
        });
    };

    const handleWorkExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWorkExperience({
            ...workExperience,
            [e.target.name]: e.target.value
        });
    };

    const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSkills(e.target.value);
    };

    useEffect(() => {
        const storedPersonalInfo = window.localStorage.getItem('personalInfo');
        const storedEducation = window.localStorage.getItem('education');
        const storedWorkExperience = window.localStorage.getItem('workExperience');
        const storedSkills = window.localStorage.getItem('skills');

        if (storedPersonalInfo) {
            setPersonalInfo(JSON.parse(storedPersonalInfo));
        }
        if (storedEducation) {
            setEducation(JSON.parse(storedEducation));
        }
        if (storedWorkExperience) {
            setWorkExperience(JSON.parse(storedWorkExperience));
        }
        if (storedSkills) {
            setSkills(storedSkills);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Perform form validation here
        if (!personalInfo.name || !personalInfo.email || !personalInfo.phoneNumber) {
            // Handle validation error
            return;
        }

        // Save form data to local storage
        window.localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
        window.localStorage.setItem('education', JSON.stringify(education));
        window.localStorage.setItem('workExperience', JSON.stringify(workExperience));
        window.localStorage.setItem('skills', skills);

        // Navigate to preview page
        router.push("/resume/preview");
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col mx-2 my-2 px-2 py-3 gap-3'>
            {/* Personal Information section */}
            <section className='flex flex-col'>
                <h2 className='text-xl font-semibold'>Personal Information</h2>
                <div className='grid grid-cols-2 px-3 py-4 gap-5'>
                    <Input
                        type="text"
                        name="name"
                        value={personalInfo.name}
                        onChange={handlePersonalInfoChange}
                        placeholder="Name"
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        value={personalInfo.email}
                        onChange={handlePersonalInfoChange}
                        placeholder="Email"
                        required
                    />
                    <Input
                        type="tel"
                        name="phoneNumber"
                        value={personalInfo.phoneNumber}
                        onChange={handlePersonalInfoChange}
                        placeholder="Phone Number"
                        required
                    />
                </div>
            </section>

            {/* Education section */}
            <section className='flex flex-col'>
                <h2 className='text-xl font-semibold'>Education</h2>
                <div className='grid grid-cols-2 px-3 py-4 gap-5'>
                    <Input
                        type="text"
                        name="degree"
                        value={education.degree}
                        onChange={handleEducationChange}
                        placeholder="Degree"
                        required
                    />
                    <Input
                        type="text"
                        name="institution"
                        value={education.institution}
                        onChange={handleEducationChange}
                        placeholder="Institution"
                        required
                    />
                    <Input
                        type="number"
                        name="year"
                        value={education.year}
                        onChange={handleEducationChange}
                        placeholder="Year"
                        required
                    />
                </div>
            </section>

            {/* Work Experience section */}
            <section className='flex flex-col'>
                <h2 className='text-xl font-semibold'>Work Experience</h2>
                <div className='grid grid-cols-2 px-3 py-4 gap-5'>
                    <Input
                        type="text"
                        name="company"
                        value={workExperience.company}
                        onChange={handleWorkExperienceChange}
                        placeholder="Company"
                        required
                    />
                    <Input
                        type="text"
                        name="role"
                        value={workExperience.role}
                        onChange={handleWorkExperienceChange}
                        placeholder="Role"
                        required
                    />
                    <Input
                        type="text"
                        name="responsibilities"
                        value={workExperience.responsibilities}
                        onChange={handleWorkExperienceChange}
                        placeholder="Responsibilities"
                        required
                    />
                    <Input
                        type="text"
                        name="duration"
                        value={workExperience.duration}
                        onChange={handleWorkExperienceChange}
                        placeholder="Duration"
                        required
                    />
                </div>
            </section>

            {/* Skills section */}
            <section>
                <h2 className='text-xl font-semibold'>Skills</h2>
                <div className='grid grid-cols-2 px-3 py-4 gap-5'>
                    <textarea
                        name="skills"
                        value={skills}
                        onChange={handleSkillsChange}
                        placeholder="Enter your skills"
                        required
                    />
                </div>
            </section>

            <Button type="submit">Submit</Button>
        </form>
    );
};

export default ResumeForm;