import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  const buttonStyle = (isActive, gradient) => `
    px-6 py-3 font-bold rounded-xl text-white text-lg
    bg-gradient-to-br ${gradient}
    shadow-[0_5px_15px_rgba(0,0,0,0.5),inset_0_2px_4px_rgba(255,255,255,0.3)]
    transform transition-all duration-200
    ${isActive ? "scale-105 shadow-2xl" : "hover:scale-105 hover:shadow-2xl"}
    relative overflow-hidden
  `;

  const shine = `
    after:content-[''] after:absolute after:top-0 after:left-0
    after:w-full after:h-1/2 after:bg-white/20
    after:rounded-t-xl after:opacity-60
  `;

  return (
    <header className="header flex items-center justify-between p-4 bg-gray-100">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
      </NavLink>

      <nav className="flex gap-4">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${buttonStyle(isActive, "from-blue-900 via-blue-600 via-blue-400 via-blue-600 to-blue-900")} ${shine}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${buttonStyle(isActive, "from-green-900 via-green-600 via-green-400 via-green-600 to-green-900")} ${shine}`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
