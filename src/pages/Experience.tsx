import worldsourceLogo from '../assets/icons/worldsource.png';
import React, { useState } from 'react';
import everiIGT from '../assets/everi.webp';
import vestasLogo from '../assets/vestas.png';
import ahsLogo from '../assets/ahs.webp';
import reactjs from '../assets/icons/reactjs.png';
import vuejs from '../assets/icons/vuejs.png';
import angularjs from '../assets/icons/angularjs.png';
import nodejs from '../assets/icons/nodejs.png';
import docker from '../assets/icons/docker.png';
import kubernetes from '../assets/icons/kubernetes.png';
import databricks from '../assets/icons/databricks.png';
import webpack from '../assets/icons/webpack.png';
import claude from '../assets/icons/claude.png';
import copilot from '../assets/icons/copilot.png';
import bootstrap from '../assets/icons/bootstrap.png';
import materialui from '../assets/icons/material-ui.png';
import primeNG from '../assets/icons/primeNG.png';
import expressjs from '../assets/icons/expressjs.png';
import vite from '../assets/icons/vite.png';
import swagger from '../assets/icons/swagger.png';
import jwt from '../assets/icons/jwt.png';
import mongodb from '../assets/icons/mongodb.png';
import sql from '../assets/icons/sql.png';
import uipath from '../assets/icons/uipath.png';
import passport from '../assets/icons/passportjs.svg';
import redis from '../assets/icons/redis-cache.png';
import redux from '../assets/icons/redux.png';
import typescript from '../assets/icons/typescript.png';
import javascript from '../assets/icons/javascript.png';
import aws from '../assets/icons/aws.png';
import amazonS3 from "../assets/icons/amazonS3.png";
import awsCloudFront from "../assets/icons/aws-cloudfront.png";
import azure from '../assets/icons/azure.png';
import storybook from '../assets/icons/storybook.png';
import tailwind from '../assets/icons/tailwind.png';
import sass from '../assets/icons/sass.png';
import figma from "../assets/icons/figma.png";

const experienceData = [
  {
    company: 'Everi | IGT',
    logo: everiIGT,
    years: '2025 - Present',
    designation: 'Senior Software Engineer I',
    projects: [
      {
        title: 'Casino Vi Web Portal',
        technologies: [angularjs, expressjs, nodejs, typescript, sass, tailwind, mongodb, aws, azure, figma, webpack, docker, kubernetes, claude, copilot],
        description: 'Casino VI is a full-featured online casino web portal developed using the MEAN stack, offering users a secure and immersive gaming experience. The platform supports real-time gameplay, user authentication, wallet management, and dynamic betting systems. Designed with scalability and performance in mind, the portal integrates responsive Angular interfaces with robust backend APIs and a NoSQL database for seamless data flow and user engagement.',
        roles: [
          'Developed and maintained the Casino VI online casino gaming portal using Angular 21, Node.js, Express.js, and MongoDB (MERN/MEAN stack).',
          'Implemented secure authentication and authorization with OAuth and JWT for user login and account management.',
          'Integrated Figma design prototypes into responsive, pixel-perfect UI components for immersive gaming experiences.',
          'Automated CI/CD pipelines and managed deployments using Azure DevOps and AWS Cloud infrastructure.',
          'Collaborated with cross-functional teams to refine requirements and deliver features on schedule.',
          'Utilized Claude and GitHub Copilot AI tools to accelerate development and ensure code quality.',
          'Optimized backend APIs for performance, scalability, and security, supporting real-time gameplay and wallet management.',
          'Wrote unit and integration tests to ensure robust, maintainable code.',
          'Participated in code reviews and provided constructive feedback to peers.',
          'Documented technical solutions and contributed to project knowledge base.'
        ],
        duration: 'July 2025 - Present',
      },
      {
        title: 'Design Token Foundation Library',
        technologies: [angularjs, typescript, sass, tailwind, storybook, aws, amazonS3, awsCloudFront, azure, figma, webpack],
        description: 'A design token library project is a centralized system for managing and distributing design decisions such as colors, typography, spacing, border radius, shadows, and other style values in a scalable and consistent way. Design tokens are platform-agnostic variables that store these values, enabling teams to maintain visual consistency across multiple products, platforms, and technologies.',
        roles: [
          'Defining, organizing, and maintaining design tokens (colors, typography, spacing, etc.) in a structured format.',
          'Implementing build scripts to transform tokens into consumable formats for different platforms (CSS, SCSS, JS, JSON, etc.).',
          'Ensuring tokens are versioned, documented, and distributed (e.g., via npm packages).',
          'Collaborating with designers to translate design decisions into tokens and keep them up to date.',
          'Integrating tokens into component libraries and applications, ensuring consistency across products.',
          'Writing and maintaining documentation and usage guidelines for consumers of the token library.',
          'For documentation and sample demo site done through Storybook library',
          'Automating testing and validation to prevent breaking changes or inconsistencies.',
          'Staying updated with best practices in design systems and token management.'
        ],
        duration: 'Sep 2025 - Present',
      },
      {
        title: 'Dhood Onboarding Wizard',
        technologies: [angularjs, typescript, sass, tailwind, aws, amazonS3, awsCloudFront, azure, figma, webpack, docker, kubernetes],
        description: 'Dhood Onboarding Wizard is a casino games patron enrollment application designed as a unified frontend platform for seamless registration across multiple modules, including Loyalty, Wallet, and VI Gaming. The platform enables patrons to enroll once and gain access to specific modules based on their registration choices. The application integrates with the Triology backend connector API and the Beon Control platform to fetch and manage patron data. User authentication and profile state management are handled via WSO2, ensuring secure and consistent user experiences across all modules.',
        roles: [
          'Developed and maintained the Dhood Onboarding Wizard frontend using modern frameworks and best practices.',
          'Designed a modular, user-friendly enrollment flow supporting Loyalty, Wallet, and VI Gaming modules.',
          'Integrated with Triology backend connector API and Beon Control platform to fetch, validate, and manage patron data.',
          'Implemented secure user authentication and profile state management using WSO2.',
          'Collaborated with backend and platform teams to ensure seamless data exchange and robust API integration.',
          'Built responsive, accessible UI components for a smooth patron onboarding experience.',
          'Wrote unit and integration tests to ensure reliability and maintainability of the codebase.',
          'Participated in code reviews, provided feedback, and contributed to continuous improvement of development processes.',
          'Documented technical solutions, onboarding flows, and integration patterns for future reference.',
        ],
        duration: 'March 2026 - Present',
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
        technologies: [angularjs, typescript, primeNG, redux, sass, azure, expressjs, nodejs, databricks, jwt, passport, redis, mongodb, webpack, docker, kubernetes],
        description: 'Vestas Academy Portal is an online E-learning platform developed by us, Vestas is a leading company in the wind energy sector. It is designed to provide training and development resources for Vestas employees, partners, and customers, ensuring they have the necessary skills and knowledge to work effectively within the renewable energy industry.',
        roles: [
          'Design and implement responsive, user-friendly web applications using Angular and ensure the technical feasibility of UI/UX designs.',
          'Implemented Angular Lifecycle hooks to manage component state and lifecycle for better user experience.',
          'Integrate front-end components with server-side APIs using Node JS.',
          'Utilized observables and RxJS operators to manage asynchronous data streams. Handle real-time data updates efficiently.',
          'Optimize application performance for maximum speed and scalability. Conduct performance tuning and implement best practices for efficient application performance.',
          'Collaborated with cross-functional teams, including backend developers, designers, and product managers, to deliver high-quality software products.',
          'Used Git for version control and code collaboration with functional teams. Debug and resolve technical issues in the application.',
          'Implementing backend queries for backend data fetching according to the frontend client requests and working with complex MongoDB queries.',
          'Used PrimeNG UI and Material UI libraries for frontend components development.',
          'Used CSS preprocessor SASS for creating reusable styles and Mixins for different components and pages efficiently.',
          'Implementing Lazy loading and pagination concepts for improving initial load time and enhancing user experience.',
          'Integrated with RESTful APIs using Angular HttpClient to fetch and update data.',
          'Implemented error handling and retry mechanisms to enhance the reliability of API interactions.',
          'Secured API calls using JWT for authentication, managing tokens and user sessions. Every backend API’s should be validated based on the JWT tokens.',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
      {
        title: 'Turbine Learning Path',
        technologies: [vuejs, javascript, sass, expressjs, nodejs, jwt, passport, databricks, mongodb, azure, webpack],
        description: 'TLP also one of the online E-learning platform and this platform useful for wind turbine technicians for learning and visually they came to understand how this turbines works and how much of the energy productivity will be provided and how to resolving the wind turbines faults during the inspection of onshore and offshore windmill sites. Service Technician also participating the wind turbine related exams in this platform for improving their skills in-terms of various wind turbines.',
        roles: [
          'This project built by our own VLK framework using Vue JS, HTML, SCSS.',
          'Design and implement responsive, user-friendly web applications using Vue JS and ensure the technical feasibility of UI/UX designs.',
          'Implemented Vue Lifecycle hooks to manage component state and lifecycle for better user experience.',
          'Integrate front-end components with server-side APIs using Node JS.',
          'Instance Vue we used data() method for handling the states between the components and simplest way of state handling.',
          'Optimize application performance for maximum speed and scalability. Conduct performance tuning and implement best practices for efficient application performance.',
          'Collaborated with cross-functional teams, including backend developers, designers, and product managers, to deliver high-quality software products.',
          'Used Git for version control and code collaboration with functional teams. Debug and resolve technical issues in the application.',
          'Implementing backend queries for backend data fetching according to the frontend client requests and working with complex MongoDB queries.',
          'Used HTML JS and SCSS for frontend components development.',
          'Used CSS preprocessor SASS for creating reusable styles and Mixins for different components and pages efficiently.',
          'Implementing Lazy loading and pagination concepts for improving initial load time and enhancing user experience.',
          'Integrated with RESTful APIs using Fetch API call to fetch and update data.',
          'Implemented error handling and retry mechanisms to enhance the reliability of API interactions.',
          'Secured API calls using JWT for authentication, managing tokens and user sessions. Every backend API’s should be validated based on the JWT tokens.',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
      {
        title: 'Navigation Learning Path',
        technologies: [vuejs, javascript, expressjs, nodejs, jwt, passport, databricks, mongodb, azure, webpack],
        description: 'Vestas Navigation Learning Path contains different types of Wind Turbine Courses, This NLP system restricted the user to access the specific courses based on the completion status of previous wind turbine exams and user types. In this NLP system well structured with all kind of turbine courses like 2MW, EnVentus, 4MW, Generic Turbines. User can access this variety of turbine courses based on the prerequisite model.',
        roles: [
          'This NLP dashboard built by using Vue JS 3, HTML, SCSS.',
          'Design and implement responsive, user-friendly web applications using Vue JS and ensure the technical feasibility of UI/UX designs.',
          'Implemented Vue Lifecycle hooks to manage component state and lifecycle for better user experience.',
          'Integrate front-end components with server-side APIs using Node JS / MongoDB.',
          'Integrated with RESTful APIs using Fetch API call to fetch and update data.',
          'Implemented error handling and retry mechanisms to enhance the reliability of API interactions.',
          'Secured API calls using JWT for authentication, managing tokens and user sessions. Every backend API’s should be validated based on the JWT tokens.',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
      {
        title: 'TIMS Application',
        technologies: [reactjs, javascript,bootstrap, vite, redux,jwt, expressjs, nodejs, jwt, passport, mongodb, swagger, azure],
        description: 'Created a modern blog platform with markdown support and social sharing.',
        roles: [
          'Designed UI components',
          'Optimized for SEO',
          '',
          '',
          '',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
      {
        title: 'App Insights Dashboard',
        technologies: [reactjs, javascript, materialui, vite, jwt, expressjs, nodejs, jwt, passport, mongodb, swagger, azure],
        description: 'Vestas AppInsights Dashboard will show how many of service technicians used the online E-learning platform and how many trainings and exams they have completed and maintain their scores and cost of each trainings and exams across the global countries. We are using Azure AppInsights cognitive service for this dashboard application.',
        roles: [
          'This Vestas AppInsight dashboard built by using React JS, HTML, SCSS, Material UI.',
          'Design and implement responsive, user-friendly web applications using React JS and ensure the technical feasibility of UI/UX designs.',
          'Implemented React Lifecycle hooks to manage component state and lifecycle for better user experience.',
          'Integrate front-end components with server-side APIs using Node JS / MongoDB.',
          'Integrated with RESTful APIs using Fetch API call to fetch and update data.',
          'Implemented error handling and retry mechanisms to enhance the reliability of API interactions.',
          'Secured API calls using JWT for authentication, managing tokens and user sessions. Every backend API’s should be validated based on the JWT tokens.',
        ],
        duration: 'Mar 2017 - Nov 2017',
      },
    ],
  },
  {
    company: 'Access Healthcare India Pvt Ltd',
    logo: ahsLogo,
    years: 'Mar 2019 - Feb 2022',
    designation: 'Senior Client Partner',
    projects: [
      {
        title: 'athenaOne Health Suite Application',
        technologies: [sql, uipath],
        description: 'AthenaOne Suite is a comprehensive healthcare IT solution offered by Athenahealth. Athenahealth is a leading provider of cloud-based services and solutions for healthcare organizations, including medical practices, hospitals, and health systems. The AthenaOne Suite includes various modules and features designed to streamline practice management, electronic health records (EHR), revenue cycle management (RCM), and patient engagement.',
        roles: [
          'Creating, maintaining, and optimizing SQL databases.',
          'Writing and optimizing SQL queries to extract and manipulate data.',
          'Handled incoming calls and emails from healthcare providers, addressing inquiries and requests promptly and professionally.',
          'Updated and maintained healthcare provider data in compliance with regulatory standards, including HIPAA regulations.',
          'Conducted regular quality checks to verify the integrity and accuracy of updated data.',
          'Microsoft excel based repeated human task automated by using Ui Path tool.'

        ],
        duration: 'Mar 2019 - Feb 2022',
      },
    ],
  },
  {
  company: 'WorldSource Healthcare India Pvt Ltd',
  logo: worldsourceLogo,
    years: 'Oct 2016 - Mar 2019',
    designation: 'Senior Client Partner',
    projects: [
      {
        title: 'athenaNet EHR Application',
        technologies: [sql, uipath],
        description: 'AthenaNet is a widely used electronic health records (EHR) system developed by athenahealth, Inc. It is designed to streamline healthcare practice management, medical billing, and patient care processes.',
        roles: [
          'Creating, maintaining, and optimizing SQL databases.',
          'Writing and optimizing SQL queries to extract and manipulate data.',
          'Handled incoming calls and emails from healthcare providers, addressing inquiries and requests promptly and professionally.',
          'Updated and maintained healthcare provider data in compliance with regulatory standards, including HIPAA regulations.',
          'Conducted regular quality checks to verify the integrity and accuracy of updated data.',
          'Utilized database management software to input, update, and retrieve healthcare provider information efficiently.',
          'Microsoft excel based repeated human task automated by using Ui Path tool.',
        ],
        duration: 'Oct 2016 - Mar 2019',
      },
    ],
  },
];

const Experience: React.FC = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>(() => {
    const initial: { [key: string]: boolean } = {};
    experienceData.forEach(exp => {
      if (exp.projects && exp.projects.length > 0) {
        initial[`${exp.company}-${exp.projects[0].title}`] = true;
      }
    });
    return initial;
  });

  const toggleAccordion = (company: string, project: string) => {
    setOpen((prev) => ({
      ...prev,
      [`${company}-${project}`]: !prev[`${company}-${project}`],
    }));
  };

  return (
    <section id="experience" className="min-h-screen bg-gray-950 flex flex-col items-center py-20">
      <h2 className="text-4xl font-extrabold text-sky-700 mb-10 text-center tracking-tight">Experience</h2>
      <div className="w-full max-w-7xl space-y-10">
        {experienceData.map((exp) => (
          <div key={exp.company} className="bg-cyan-100 rounded-xl shadow p-6">
            <div className="flex items-center gap-4 mb-2">
                  <div className="flex flex-col items-start">
                    <div className='w-60 h-25'>
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className={`mb-2${exp.company.includes('Vestas') ? ' w-32' : ''}`}
                          style={exp.company.includes('Vestas') ? { width: '8rem', height: 'auto' } : {}}
                        />
                    </div>
                    <div className="text-sky-600 font-semibold mb-1">{exp.designation}</div>
                    <div className="text-slate-500 text-sm">{exp.years}</div>
                  </div>
            </div>
            <div className="mt-4 space-y-4">
              {exp.projects.map((proj) => (
                <div key={proj.title}>
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-lg bg-cyan-300 hover:bg-cyan-200 focus:outline-none"
                    onClick={() => toggleAccordion(exp.company, proj.title)}
                  >
                    <span className='text-indigo-950'>{proj.title}</span>
                    <span className='text-indigo-500'>{open[`${exp.company}-${proj.title}`] ? '▲' : '▼'}</span>
                  </button>
                  {open[`${exp.company}-${proj.title}`] && (
                    <div className="p-4 bg-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        {proj.technologies.map((tech, idx) => (
                          <img key={idx} src={tech} alt="tech" className="w-8 h-8" />
                        ))}
                      </div>
                      <div className="mb-2 text-slate-700">{proj.description}</div>
                      <div className="mb-2">
                        <span className="font-semibold text-sky-700">Roles & Responsibilities:</span>
                        <ul className="list-disc pl-6 text-slate-700">
                          {proj.roles.map((role, idx) => (
                            <li key={idx}>{role}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="font-semibold text-sky-700">Project Duration: <span className='text-sm text-gray-800'>{proj.duration}</span></div>
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
