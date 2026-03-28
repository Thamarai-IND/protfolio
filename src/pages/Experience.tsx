import React, { useState } from 'react';
import everiIGT from '../assets/everi.webp';
import vestasLogo from '../assets/vestas.png';
import ahsLogo from '../assets/ahs.webp';
import wsiLogo from '../assets/wsi.png';
import viteLogo from '../assets/vite.svg';


const experienceData = [
  {
    company: 'Everi | IGT',
    logo: everiIGT,
    years: '2025 - Present',
    designation: 'Senior Software Engineer I',
    projects: [
      {
        title: 'Retail Store POS Application',
        technologies: [everiIGT, viteLogo],
        description: 'A full-featured POS system for retail stores, supporting inventory, billing, and analytics.',
        roles: [
          'Developed core POS modules',
          'Integrated payment gateways',
          'Led a team of 4 developers',
        ],
        duration: 'Jan 2020 - Dec 2021',
      },
      {
        title: 'E-commerce Platform',
        technologies: [viteLogo],
        description: 'Built a scalable e-commerce platform with real-time order tracking and customer management.',
        roles: [
          'Architected the platform',
          'Implemented CI/CD pipelines',
        ],
        duration: 'Feb 2019 - Dec 2019',
      },
    ],
  },
  {
    company: 'Vestas Wind Technology Pvt Ltd',
    logo: vestasLogo,
    years: '2022 - 2025',
    designation: 'Fullstack Developer',
    projects: [
      {
        title: 'Vestas Academy Portal',
        technologies: [vestasLogo],
        description: 'Created a modern blog platform with markdown support and social sharing.',
        roles: [
          'Designed UI components',
          'Optimized for SEO',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
      {
        title: 'Turbine Learning Path',
        technologies: [vestasLogo],
        description: 'Created a modern blog platform with markdown support and social sharing.',
        roles: [
          'Designed UI components',
          'Optimized for SEO',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
    ],
  },
  {
    company: 'Access Healthcare India Pvt Ltd',
    logo: ahsLogo,
    years: '2019 - 2022',
    designation: 'Senior Client Partner',
    projects: [
      {
        title: 'Vestas Academy Portal',
        technologies: [vestasLogo],
        description: 'Created a modern blog platform with markdown support and social sharing.',
        roles: [
          'Designed UI components',
          'Optimized for SEO',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
      {
        title: 'Turbine Learning Path',
        technologies: [vestasLogo],
        description: 'Created a modern blog platform with markdown support and social sharing.',
        roles: [
          'Designed UI components',
          'Optimized for SEO',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
    ],
  },
  {
    company: 'WorldSource Healthcare India Pvt Ltd',
    logo: wsiLogo,
    years: '2019 - 2022',
    designation: 'Senior Client Partner',
    projects: [
      {
        title: 'Vestas Academy Portal',
        technologies: [vestasLogo],
        description: 'Created a modern blog platform with markdown support and social sharing.',
        roles: [
          'Designed UI components',
          'Optimized for SEO',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
      {
        title: 'Turbine Learning Path',
        technologies: [vestasLogo],
        description: 'Created a modern blog platform with markdown support and social sharing.',
        roles: [
          'Designed UI components',
          'Optimized for SEO',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
    ],
  },
];

const Experience: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (company: string, project: string) => {
    setOpen((prev) => ({
      ...prev,
      [`${company}-${project}`]: !prev[`${company}-${project}`],
    }));
  };

  return (
    <section id="experience" className="min-h-screen bg-gray-900 flex flex-col items-center py-20">
      <h2 className="text-4xl font-extrabold text-emerald-400 mb-10 text-center tracking-tight">Experience</h2>
      <div className="w-full max-w-7xl space-y-10">
        {experienceData.map((exp) => (
          <div key={exp.company} className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-4 mb-2">
                  <div className="flex flex-col items-start">
                    <div className='w-60 h-25'>
                        <img src={exp.logo} alt={exp.company} className=" mb-2" />
                    </div>
                    <div className="text-sky-600 font-semibold mb-1">{exp.designation}</div>
                    <div className="text-slate-500 text-sm">{exp.years}</div>
                  </div>
            </div>
            <div className="mt-4 space-y-4">
              {exp.projects.map((proj) => (
                <div key={proj.title} className="border rounded-lg">
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-lg bg-slate-100 hover:bg-slate-200 rounded-t-lg focus:outline-none"
                    onClick={() => toggleAccordion(exp.company, proj.title)}
                  >
                    <span>{proj.title}</span>
                    <span>{open[`${exp.company}-${proj.title}`] ? '▲' : '▼'}</span>
                  </button>
                  {open[`${exp.company}-${proj.title}`] && (
                    <div className="p-4 bg-slate-50 rounded-b-lg border-t">
                      <div className="flex items-center gap-2 mb-2">
                        {proj.technologies.map((tech, idx) => (
                          <img key={idx} src={tech} alt="tech" className="w-8 h-8" />
                        ))}
                      </div>
                      <div className="mb-2 text-slate-700">{proj.description}</div>
                      <div className="mb-2">
                        <span className="font-semibold text-sky-700">Roles & Responsibilities:</span>
                        <ul className="list-disc pl-6">
                          {proj.roles.map((role, idx) => (
                            <li key={idx}>{role}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-sm text-slate-500">Project Duration: {proj.duration}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
