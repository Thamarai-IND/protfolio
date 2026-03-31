import React from 'react';
import linkedinIcon from '../assets/icons/linkedin.png';
import githubIcon from '../assets/icons/github.png';

const Contact: React.FC = () => (
  <section id="contact" className=" flex flex-col justify-center items-center bg-zinc-950 py-8">
    <h2 className="text-3xl text-sky-700 font-bold mb-8">Contact</h2>
    <div className="flex gap-8 items-center">
      {/* Linktree (styled fallback) */}
      <a
        href="https://linktr.ee/thamaraivivid"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
    <span className="w-16 h-16 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform rounded-full" style={{ backgroundColor: '#00C48C' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" height="38" style={{ display: 'block', width: 'auto' }}>
              <title>Linktree Logo</title>
              <desc>Linktree Logo Symbol</desc>
              <path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z" fill="#000000"></path>
            </svg>
          </span>
          <span className="text-slate-700 text-sm font-semibold">Linktree</span>
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/thamaraiselvan-balakrishnan-9995b623a/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
  <img src={linkedinIcon} alt="LinkedIn" className="w-16 h-16 mb-2 object-contain group-hover:scale-110 transition-transform" />
        <span className="text-slate-700 text-sm font-semibold">LinkedIn</span>
      </a>
      {/* GitHub */}
      <a
        href="https://github.com/Thamarai-IND"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center group"
      >
        <img src={githubIcon} alt="GitHub" className="w-16 h-16 rounded-full mb-2 group-hover:scale-110 transition-transform" />
        <span className="text-slate-700 text-sm font-semibold">GitHub</span>
      </a>
    </div>
  </section>
);

export default Contact;
