import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container py-8 sm:py-10 min-h-screen bg-gradient-to-b from-green-100 via-green-200 via-green-400 via-green-600 via-lime-400 via-green-200 to-green-100 px-4">
      <h1 className="head-text text-3xl sm:text-4xl md:text-5xl font-bold text-black drop-shadow-lg text-center sm:text-left">
        My
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-600 to-lime-700 font-semibold ml-2">
          Projects
        </span>
      </h1>

      <p className="text-black mt-3 leading-relaxed max-w-3xl text-sm sm:text-base text-center sm:text-left">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="flex flex-wrap my-10 sm:my-20 gap-10 sm:gap-16 justify-center">
        {projects.map((project) => (
          <div key={project.name} className="w-full sm:w-[380px] lg:w-[400px]">
            <div className="p-5 sm:p-6 rounded-2xl bg-green-50 border border-gray-200 shadow-[0px_6px_14px_rgba(0,0,0,0.25)] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.32)] transition-all duration-300 transform hover:-translate-y-2">

              <div className="flex flex-col">
                <h4 className="text-xl sm:text-2xl font-poppins font-extrabold text-green-700 drop-shadow-md text-center sm:text-left">
                  {project.name}
                </h4>

                {project.youtubeUrl && (
                  <div className="mt-4 sm:mt-6 w-full h-48 sm:h-64 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.youtubeUrl}
                      title={project.name + " Video"}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                <p className="mt-2 text-black/70 text-sm sm:text-base text-center sm:text-left">
                  {project.description}
                </p>

                <div className="mt-5 flex items-center gap-2 font-poppins justify-center sm:justify-start">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-green-700 hover:text-green-900 text-sm sm:text-base"
                  >
                    Live Link
                  </Link>
                  <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-300 mt-8 sm:mt-10" />

      <CTA />
    </section>
  );
};

export default Projects;
