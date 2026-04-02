import React from 'react';


const About: React.FC = () => (
  <section id="about" className="w-full bg-cyan-300 py-12 sm:py-16 md:py-20 flex flex-col items-center">
    <div className="w-full max-w-7xl px-2 sm:px-4 md:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-fuchsia-900 mb-8 sm:mb-10 text-center tracking-tight">ABOUT MYSELF</h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch justify-center">
        {/* Left: Objective */}
        <div className="flex-1 bg-gray-900 rounded-xl shadow p-4 sm:p-6 flex flex-col justify-center mb-4 md:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-pink-600 mb-3 sm:mb-4 text-center md:text-left">OBJECTIVE</h3>
          <p className="text-base sm:text-lg text-cyan-100 text-center md:text-left">
            I am a fervent web developer with great enthusiasm to enrich web. I prefer to keep learning, continue challenging myself, and do interesting things that matter. My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
          </p>
        </div>
        {/* Right: Education */}
        <div className="flex-1 bg-gray-900 rounded-xl shadow p-4 sm:p-6 flex flex-col justify-center">
          <h3 className="text-xl sm:text-2xl font-bold text-pink-600 mb-3 sm:mb-4 text-center md:text-left">EDUCATION</h3>
          <div className="text-cyan-100 text-center md:text-left">
            <div className="font-semibold text-base sm:text-lg mb-1">2010 - 2014</div>
            <div className="mb-1">Excel College of Engineering &amp; Technology</div>
            <div>Electronics and Communication Engineering</div>
            <div className="text-sky-700 font-semibold mt-1">Aggregate: 70%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
