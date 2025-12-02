import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { CTA } from "../components";
import { experiences, skills } from "../constants";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container py-10 min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 via-blue-400 via-blue-600 via-blue-400 via-blue-200 to-blue-100">
      {/* HEADER */}
      <div className="text-center md:text-left">
        <motion.h1
          className="head-text text-4xl md:text-5xl font-bold text-black drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-sky-700 to-indigo-500 animate-gradient-x ml-2">
            Satyabrata
          </span>
          👋
        </motion.h1>

        <motion.p
          className="mt-5 text-black max-w-3xl mx-auto md:mx-0 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Software Engineering student based in India, exploring Cyber Security, MERN Stack development, and core computer science concepts through hands-on learning, internships, workshops, and certified courses.
        </motion.p>
      </div>

      {/* SKILLS — FLOATING EFFECT */}
      <section className="py-16">
        <h3 className="subhead-text mb-8 text-black text-center md:text-left">My Skills</h3>

        <motion.div
          className="flex flex-wrap gap-8 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="block-container w-20 h-20 relative cursor-pointer rounded-xl"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              animate={{ y: [0, -12, 0] }}
              transition={{ y: { repeat: Infinity, duration: 3 + index * 0.3, ease: "easeInOut" } }}
            >
               <div className="btn-back rounded-xl absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-800 via-violet-600 to-black blur-lg opacity-90" />
              <div className="btn-front rounded-xl flex justify-center items-center relative z-10 bg-white shadow-lg">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* EXPERIENCE — ALTERNATING TIMELINE */}
      <section className="py-16">
        <h3 className="subhead-text mb-5 text-black text-center md:text-left">Experience & Certifications</h3>
        <p className="text-black mb-12 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          Here are the internships, workshops, and certified courses I have completed as part of my learning journey.
        </p>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.company_name + index}
              date={experience.date}
              position={index % 2 === 0 ? "left" : "right"}
           iconStyle={{
  background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.9) 0%, rgba(245,245,245,0.6) 40%, rgba(220,220,220,0.2) 80%)",
  backdropFilter: "blur(6px)",
  boxShadow: "0 10px 20px rgba(0,0,0,0.25), inset 0 5px 12px rgba(255,255,255,0.7)",
  border: "1px solid rgba(255,255,255,0.8)",
}}


              contentStyle={{
                borderBottom: `8px solid ${experience.iconBg}`,
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                borderRadius: "15px",
                backgroundColor: "rgba(255, 255, 255, 0.95)",
              }}
            >
              <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
              <p className="text-black-500 font-medium text-base mb-3">{experience.company_name}</p>

              <ul className="list-disc ml-5 space-y-2 mb-4 text-black-500/70 text-sm font-normal">
                {experience.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {experience.certificateUrl && (
                <motion.div whileHover={{ scale: 1.05, y: -5 }} className="mt-6">
                  <p className="text-sm text-slate-600 mb-2 font-medium">Certificate:</p>
                  <img
                    src={experience.certificateUrl}
                    alt={`${experience.title} Certificate`}
                    className="w-full rounded-lg border shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  />
                </motion.div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>

      <hr className="border-slate-200 my-16" />

      <CTA />
    </section>
  );
};

export default About;
