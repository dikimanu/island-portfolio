import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { arrow } from "../assets/icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HomeInfo = ({ currentStage }) => {
  const Wrapper = ({ children }) => (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-white mx-4 max-w-sm sm:max-w-xl text-center"
    >
      {children}
    </motion.div>
  );

  if (currentStage === 1)
    return (
      <Wrapper>
        <h1 className="text-2xl sm:text-4xl font-bold">
          Hi, I'm <span className="text-yellow-300">Satyabrata</span> 👋
        </h1>
        <p className="text-base sm:text-lg opacity-90">
          A passionate Software Engineering student from Kolkata, India.
        </p>
      </Wrapper>
    );

  if (currentStage === 2)
    return (
      <Wrapper>
        <p className="text-base sm:text-lg opacity-90">
          Working on Projects, Internships, Core Subjects, and many more…
          <br /> constantly learning & leveling up 🔥
        </p>

        <Link
          to="/about"
          className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 sm:px-5 sm:py-2 rounded-xl shadow hover:scale-105 transition-transform text-sm sm:text-base"
        >
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </Wrapper>
    );

  if (currentStage === 3)
    return (
      <Wrapper>
        <p className="text-base sm:text-lg opacity-90">
          Led multiple impactful projects.
          <br /> Curious about what I’ve built? 🚀
        </p>

        <Link
          to="/projects"
          className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 sm:px-5 sm:py-2 rounded-xl shadow hover:scale-105 transition-transform text-sm sm:text-base"
        >
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </Wrapper>
    );

  if (currentStage === 4)
    return (
      <Wrapper>
        <p className="text-base sm:text-lg opacity-90">
          Need a project done or searching for a developer?
          <br /> Let's collaborate and build something amazing 💡
        </p>

        <Link
          to="/contact"
          className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 sm:px-5 sm:py-2 rounded-xl shadow hover:scale-105 transition-transform text-sm sm:text-base"
        >
          Let’s talk
          <img src={arrow} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </Wrapper>
    );

  return null;
};

export default HomeInfo;