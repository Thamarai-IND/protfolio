import React from 'react';


const skills = [
  { name: 'Type Script', percent: 75 },
  { name: 'React JS', percent: 85 },
  { name: 'NodeJs (Express)', percent: 85 },
  { name: 'Core Java', percent: 85 },
  { name: 'Python', percent: 80 },
  { name: 'MongoDB', percent: 85 },
  { name: 'MySQL', percent: 80 },
];

const Skills: React.FC = () => (
  <section id="skills" className="w-full bg-gray-900 py-20 flex flex-col items-center">
    <div className="w-full max-w-3xl px-4">
      <h2 className="text-4xl font-extrabold text-sky-700 mb-8 text-center tracking-tight">SKILLS ACQUIRED</h2>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-slate-700">{skill.name}</span>
              <span className="font-semibold text-sky-700">{skill.percent}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-4">
              <div
                className="bg-sky-600 h-4 rounded-full transition-all duration-700"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
