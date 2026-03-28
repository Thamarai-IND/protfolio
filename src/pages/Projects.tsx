import React, { useState } from 'react';
import { projectList } from './projectData';
import reactjs from '../assets/icons/reactjs.png';
import angularjs from '../assets/icons/angularjs.png';
import nodejs from '../assets/icons/nodejs.png';
import bootstrap from '../assets/icons/bootstrap.png';
import materialui from '../assets/icons/material-ui.png';
import primeNG from '../assets/icons/primeNG.png';
import expressjs from '../assets/icons/expressjs.png';
import redis from '../assets/icons/redis-cache.png';
import redux from '../assets/icons/redux.png';
import razorpay from '../assets/icons/razorpay.png';
import mongodb from '../assets/icons/mongodb.png';
import postgres from '../assets/icons/postgresql.png';
import aws from '../assets/icons/aws.png';
import typescript from '../assets/icons/typescript.png';
import tailwind from '../assets/icons/tailwind.png';
import sass from '../assets/icons/sass.png';
import html5 from '../assets/icons/html5.png';
import css3 from '../assets/icons/css3.png';
import javascript from '../assets/icons/javascript.png';
import jwt from '../assets/icons/jwt.png';
import passportjs from "../assets/icons/passportjs.svg";
import vercel from '../assets/icons/vercel.png';
import netlify from '../assets/icons/netlify.png';
import vite from "../assets/icons/vite.png";
import webpack from "../assets/icons/webpack.png";
import chartjs from "../assets/icons/chartjs.svg";
import coingecko from "../assets/icons/coingecko.png";
import openweather from "../assets/icons/open-weather.webp";

const techIcons: Record<string, string> = {
  reactjs, angularjs, bootstrap, materialui, primeNG, vite, nodejs, expressjs, redis, razorpay, redux, mongodb, postgres, aws, typescript, tailwind, sass, html5, css3, javascript, jwt, passportjs, vercel, webpack, netlify, chartjs, coingecko, openweather,
};

const FILTERS = ["ALL", "FullStack", "Frontend", "Backend"];

const Projects: React.FC = () => {
  const [active, setActive] = useState<string>("ALL");
  const filtered = active === "ALL" ? projectList : projectList.filter(p => p.type === active);

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center bg-slate-200 py-20">
      <h2 className="text-4xl font-extrabold text-sky-700 mb-8 text-center tracking-tight">PROJECTS</h2>
      <div className="flex gap-4 mb-10">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-200 text-lg ${active === f ? 'bg-sky-700 text-white border-sky-700 shadow' : 'bg-white text-sky-700 border-sky-700 hover:bg-sky-100'}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((proj, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={proj.image} alt={proj.title} className="h-48 w-full object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-sky-700 mb-2">{proj.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((tech, i) => (
                  <img key={i} src={techIcons[tech]} alt={tech} className="h-7 w-7" title={tech} />
                ))}
              </div>
              <p className="text-slate-700 mb-4 flex-1">{proj.description}</p>
              <div className="mt-auto flex gap-3">
                <a
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
                {proj.hostLink ? (
                  <a
                    href={proj.hostLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-sky-700 text-white rounded-full font-semibold hover:bg-sky-800 transition"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button
                    className="inline-block px-4 py-2 bg-slate-400 text-white rounded-full font-semibold cursor-not-allowed opacity-60"
                    disabled
                    title="Live demo not available"
                  >
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
