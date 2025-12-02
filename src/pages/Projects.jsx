import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container py-10 min-h-screen bg-gradient-to-b from-green-100 via-green-200 via-green-400 via-green-600 via-lime-400 via-green-200 to-green-100'>
      <h1 className='head-text text-4xl md:text-5xl font-bold text-black drop-shadow-lg'>
        My{" "}
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-600 to-lime-700 font-semibold ml-2'>
          Projects
        </span>
      </h1>

      <p className='text-black mt-2 leading-relaxed max-w-3xl'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div key={project.name} className='lg:w-[400px] w-full'>
            <div className='p-6 rounded-2xl bg-green-50 border border-gray-200 shadow-[0px_6px_14px_rgba(0,0,0,0.25),0px_-6px_14px_rgba(0,0,0,0.18),6px_0px_14px_rgba(0,0,0,0.22),-6px_0px_14px_rgba(0,0,0,0.22)] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.32),0px_-10px_20px_rgba(0,0,0,0.22),10px_0px_20px_rgba(0,0,0,0.28),-10px_0px_20px_rgba(0,0,0,0.28)] transition-all duration-300 transform hover:-translate-y-2'>

              <div className='flex flex-col'>
                <h4 className='text-2xl font-poppins font-extrabold text-green-700 drop-shadow-md'>
                  {project.name}
                </h4>

                {project.youtubeUrl && (
                  <div className='mt-6 w-full h-64 rounded-xl overflow-hidden shadow-lg'>
                    <iframe
                      width='100%'
                      height='100%'
                      src={project.youtubeUrl}
                      title={project.name + ' Video'}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <p className='mt-2 text-black/70'>{project.description}</p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-green-700 hover:text-green-900'
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-300' />

      <CTA />
    </section>
  );
};

export default Projects;
