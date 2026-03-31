import chatgpt from '../assets/icons/chatgpt.png';
import claude from '../assets/icons/claude.png';
import gemini from '../assets/icons/gemini.png';
import copilot from '../assets/icons/copilot.png';
import openai from '../assets/icons/chatgpt.png';

import reactjs from '../assets/icons/reactjs.png';
import angularjs from '../assets/icons/angularjs.png';
import vuejs from '../assets/icons/vuejs.png';
import typescript from '../assets/icons/typescript.png';
import javascript from '../assets/icons/javascript.png';
import html5 from '../assets/icons/html5.png';
import css3 from '../assets/icons/css3.png';
import sass from '../assets/icons/sass.png';
import tailwind from '../assets/icons/tailwind.png';
import bootstrap from '../assets/icons/bootstrap.png';
import materialui from '../assets/icons/material-ui.png';
import primeNG from '../assets/icons/primeNG.png';
import nodejs from '../assets/icons/nodejs.png';
import expressjs from '../assets/icons/expressjs.png';
import python from '../assets/icons/python.png';
import java from '../assets/icons/java.png';
import redis from '../assets/icons/redis-cache.png';
import jwt from '../assets/icons/jwt.png';
import passportjs from '../assets/icons/passportjs.svg';
import mongodb from '../assets/icons/mongodb.png';
import postgres from '../assets/icons/postgresql.png';
import mysql from '../assets/icons/sql.png';
import aws from '../assets/icons/aws.png';
import azure from '../assets/icons/azure.png';

const llmModels = [
  {
    ai: { name: 'OpenAI', icon: openai },
    models: [
      { name: 'GPT‑5.4 Pro', usecase: 'Advanced reasoning, coding, and creative writing.' },
      { name: 'GPT‑5.4 Mini', usecase: 'Fast, lightweight chat and summarization.' },
      { name: 'GPT‑4o Family', usecase: 'Multimodal (text, vision, audio), broad general use.' },
    ],
  },
  {
    ai: { name: 'Claude', icon: claude },
    models: [
      { name: 'Claude 3 Opus', usecase: 'Enterprise-level reasoning, long context.' },
      { name: 'Claude 3 Sonnet', usecase: 'Balanced speed and intelligence.' },
      { name: 'Claude 3 Haiku', usecase: 'Fastest, for lightweight tasks.' },
    ],
  },
  {
    ai: { name: 'Gemini', icon: gemini },
    models: [
      { name: 'Gemini 1.5 Pro', usecase: 'Multimodal, long context, coding, and analysis.' },
      { name: 'Gemini 1.0 Ultra', usecase: 'Advanced reasoning and creative tasks.' },
    ],
  },
  {
    ai: { name: 'GitHub Copilot', icon: copilot },
    models: [
      { name: 'Copilot', usecase: 'AI code completion and suggestions in IDEs.' },
    ],
  },
];

const techCategories = [
  {
    title: 'Frontend',
    techs: [
      { name: 'React', icon: reactjs },
      { name: 'Angular', icon: angularjs },
      { name: 'Vue', icon: vuejs },
      { name: 'TypeScript', icon: typescript },
      { name: 'JavaScript', icon: javascript },
      { name: 'HTML5', icon: html5 },
      { name: 'CSS3', icon: css3 },
      { name: 'Sass', icon: sass },
      { name: 'Tailwind', icon: tailwind },
      { name: 'Bootstrap', icon: bootstrap },
      { name: 'Material UI', icon: materialui },
      { name: 'PrimeNG', icon: primeNG },
    ],
  },
  {
    title: 'Backend',
    techs: [
      { name: 'Node.js', icon: nodejs },
      { name: 'Express.js', icon: expressjs },
      { name: 'Python', icon: python },
      { name: 'Java', icon: java },
      { name: 'Redis', icon: redis },
      { name: 'JWT', icon: jwt },
      { name: 'Passport.js', icon: passportjs },
    ],
  },
  {
    title: 'Database',
    techs: [
      { name: 'MongoDB', icon: mongodb },
      { name: 'PostgreSQL', icon: postgres },
      { name: 'MySQL', icon: mysql },
      { name: 'Redis', icon: redis },
    ],
  },
  {
    title: 'Cloud',
    techs: [
      { name: 'AWS', icon: aws },
      { name: 'Azure', icon: azure },
    ],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="w-full bg-gray-900 py-20 flex flex-col items-center">
    <h2 className="text-4xl font-extrabold text-sky-700 mb-8 text-center tracking-tight">SKILLS ACQUIRED</h2>
    <div className="w-full max-w-6xl flex flex-col gap-8 px-4">
      {/* LLM Models Section */}
      <div className="bg-zinc-950 rounded-xl shadow p-6 flex flex-col items-start">
        <h3 className="text-2xl font-bold text-sky-500 mb-4">LLM</h3>
        <div className="flex flex-col gap-6 w-full">
          {Array.from({ length: Math.ceil(llmModels.length / 2) }).map((_, rowIdx) => (
            <div key={rowIdx} className="flex flex-row gap-8 w-full">
              {llmModels.slice(rowIdx * 2, rowIdx * 2 + 2).map((llm) => (
                <div key={llm.ai.name} className="flex items-start gap-6 flex-1">
                  <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-zinc-900 rounded-lg">
                    <img src={llm.ai.icon} alt={llm.ai.name} className="h-12 w-12 object-contain" />
                  </div>
                  <div className="flex flex-col gap-2">
                    {llm.models.map((model) => (
                      <div key={model.name} className="bg-zinc-900 rounded-lg p-3 shadow flex flex-col">
                        <span className="text-slate-200 text-base font-semibold">{model.name}</span>
                        <span className="text-slate-400 text-sm">{model.usecase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Other Tech Categories */}
      {techCategories.map((cat) => (
        <div key={cat.title} className="bg-zinc-950 rounded-xl shadow p-6 flex flex-col items-start">
          <h3 className="text-2xl font-bold text-sky-500 mb-4">{cat.title}</h3>
          <div className="flex flex-row flex-wrap gap-4 w-full">
            {cat.techs.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center bg-zinc-900 rounded-lg p-3 w-24 h-28 shadow hover:scale-105 transition-transform">
                <img src={tech.icon} alt={tech.name} className="h-10 w-10 mb-2 object-contain" />
                <span className="text-slate-200 text-sm text-center font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
