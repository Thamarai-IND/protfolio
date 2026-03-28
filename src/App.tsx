// src/App.tsx

import Header from "./components/Header";
import profilePic from "./assets/profile_pic.png";
import reactjs from "./assets/icons/reactjs.png";
import angularjs from "./assets/icons/angularjs.png";
import nodejs from "./assets/icons/nodejs.png";
import expressjs from "./assets/icons/expressjs.png";
import redis from "./assets/icons/redis-cache.png";
import redux from "./assets/icons/redux.png";
import mongodb from "./assets/icons/mongodb.png";
import postgres from "./assets/icons/postgresql.png";
import aws from "./assets/icons/aws.png";
import azure from "./assets/icons/azure.png";
import postman from "./assets/icons/postman.png";
import figma from "./assets/icons/figma.png";
import javascript from "./assets/icons/javascript.png";
import typescript from "./assets/icons/typescript.png";
import sass from "./assets/icons/sass.png";
import html5 from "./assets/icons/html5.png";
import css3 from "./assets/icons/css3.png";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="min-h-screen w-full bg-gray-900">
      <Header />
      <main className="pt-0"> {/* Add padding top to offset fixed header */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center  text-slate-900">
          <div className="w-full max-w-full flex flex-col md:flex-row items-center justify-center gap-4 px-4">
            {/* Left: Profile Picture */}
            <div className="flex-shrink-0 flex justify-center items-center w-full md:max-w-md mb-8 md:mb-0">
              <img src={profilePic} alt="Profile" className="rounded-none w-68 h-80 object-fit " />
            </div>
            {/* Right: Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-lg font-semibold text-sky-600 tracking-widest mb-2">THIS IS ME</div>
              <h1 className="text-5xl text-white md:text-6xl font-extrabold mb-4">THAMARAISELVAN B</h1>
              <p className="text-xl text-white md:text-2xl font-medium mb-6">An enthusiastic <span className="text-orange-500">Full Stack Web Developer</span> trying to pave his way towards enriching web.</p>
              <a
                href="#projects"
                className="inline-block px-8 py-3 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:opacity-90 transition-opacity font-semibold text-lg"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="skills w-full flex items-center justify-center py-4 bg-transparent overflow-hidden mt-10">
            <div className="relative w-full max-w-5xl h-20 overflow-hidden">
              <div className="absolute left-0 top-0 flex animate-marquee-full w-max">
                {[
                  reactjs, angularjs, expressjs, nodejs, aws, azure, mongodb, postgres, redis, redux, figma, sass, css3, html5, javascript, typescript, postman,
                  reactjs, angularjs, expressjs, nodejs, aws, azure, mongodb, postgres, redis, redux, figma, sass, css3, html5, javascript, typescript, postman
                ].map((icon, idx) => (
                  <img
                    key={idx}
                    src={icon}
                    alt="tech"
                    className="inline-block h-14 w-14 mx-6"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
  <About />
  <Experience />
  <Skills />
  <Projects />
  <Contact />
      </main>
      <footer className="p-6 text-center text-gray-500">
        © {new Date().getFullYear()} My Portfolio
      </footer>
    </div>
  );
}

export default App;
