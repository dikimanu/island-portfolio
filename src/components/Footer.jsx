import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer font-poppins bg-gradient-to-r from-black 
        via-gray-700  to-black  text-white py-8">
      <div className="container mx-auto px-4">
        {/* Divider */}
        <hr className="border-white/90 mb-9" />

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-center md:text-left text-sm md:text-base">
            © 2026 <strong>Satyabrata Pal</strong>. All rights reserved.
          </p>

          <div className="flex gap-4 justify-center items-center">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                to={link.link}
                target="_blank"
                className="transform hover:scale-125 transition-transform duration-300"
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-8 h-8 object-contain filter hover:brightness-150 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Optional Tagline */}
        <p className="text-center text-xs text-white/80 mt-4">
          Made with ChatGPT by Satyabrata Pal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
