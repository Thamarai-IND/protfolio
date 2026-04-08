// src/App.tsx

import Header from "./components/Header";
import profilePic from "./assets/profile_pic.png";
import reactjs from "./assets/icons/reactjs.png";
import angularjs from "./assets/icons/angularjs.png";
import vuejs from "./assets/icons/vuejs.png";
import bootstrap from "./assets/icons/bootstrap.png";
import primeNG from "./assets/icons/primeNG.png";
import nodejs from "./assets/icons/nodejs.png";
import expressjs from "./assets/icons/expressjs.png";
import redis from "./assets/icons/redis-cache.png";
import redux from "./assets/icons/redux.png";
import mongodb from "./assets/icons/mongodb.png";
import tailwind from "./assets/icons/tailwind.png";
import postgres from "./assets/icons/postgresql.png";
import aws from "./assets/icons/aws.png";
import azure from "./assets/icons/azure.png";
import postman from "./assets/icons/postman.png";
import figma from "./assets/icons/figma.png";
import databricks from "./assets/icons/databricks.png";
import javascript from "./assets/icons/javascript.png";
import typescript from "./assets/icons/typescript.png";
import swagger from "./assets/icons/swagger.png";
import sass from "./assets/icons/sass.png";
import html5 from "./assets/icons/html5.png";
import css3 from "./assets/icons/css3.png";
import vite from "./assets/icons/vite.png";
import webpack from "./assets/icons/webpack.png";
import vercel from "./assets/icons/vercel.png";
import netlify from "./assets/icons/netlify.png";
import github from "./assets/icons/github.png";
import copilot from "./assets/icons/copilot.png";
import claude from "./assets/icons/claude.png";

import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  console.log("btoa : ",btoa("COL0eDHvxCF23EQl9g5iSkSNVJksCMEAUHNegbgciSrsbvRR1P1TJQQJ99CCACAAAAACO0tcAAASAZDOPTkI"))
  return (
    <div className="min-h-screen  md:min-h-[62vh] w-full bg-gray-900">
      <Header />
      <main className="pt-0"> {/* Add padding top to offset fixed header */}
  <section id="home" className="min-h-screen flex flex-col justify-center items-center text-slate-900">
          <div className="w-full max-w-full flex flex-col md:flex-row items-center justify-center gap-4 px-2 sm:px-4">
            {/* Left: Profile Picture */}
            <div className="flex-shrink-0 flex justify-center items-center w-full md:max-w-md mb-6 md:mb-0">
              <div className="rounded-full p-[10px]">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-[320px] md:h-[320px] object-cover object-[center_38%]"
                />
              </div>
            </div>
            {/* Right: Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="text-base sm:text-lg font-semibold text-sky-600 tracking-widest mb-1 sm:mb-2">THIS IS ME</div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl text-white font-extrabold mb-2 sm:mb-4">THAMARAISELVAN B</h1>
              <p className="text-base sm:text-xl md:text-2xl text-white font-medium mb-4 sm:mb-6">Fervent <span className="text-orange-500">Full Stack Developer</span> with great enthusiasm to enrich web. Totally I have 9.5 years of IT industry experience and specifically in full stack development I gained 5 years of experience.</p>
              <a
                href="#projects"
                className="inline-block px-5 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:opacity-90 transition-opacity font-semibold text-base sm:text-lg"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="skills w-full flex items-center justify-center py-4 bg-transparent overflow-hidden mt-6 sm:mt-10">
            <div className="relative w-full max-w-[92rem] h-14 sm:h-20 overflow-hidden">
              <div className="absolute left-0 top-0 flex animate-marquee-full w-max">
                {[
                  reactjs, angularjs, vuejs, bootstrap, primeNG, expressjs, nodejs, aws, azure, mongodb, postgres, redis, redux, figma, tailwind, sass, css3, html5, github, vite, webpack, javascript, typescript, postman, swagger, vercel, netlify, databricks, copilot, claude,
                  reactjs, angularjs, vuejs, bootstrap, primeNG, expressjs, nodejs, aws, azure, mongodb, postgres, redis, redux, figma, tailwind, sass, css3, html5, github, vite, webpack, javascript, typescript, postman, swagger, vercel, netlify, databricks, copilot, claude
                ].map((icon, idx) => (
                  <img
                    key={idx}
                    src={icon}
                    alt="tech"
                    className="inline-block h-8 w-8 sm:h-14 sm:w-14 mx-3 sm:mx-6"
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
