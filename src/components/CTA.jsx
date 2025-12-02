import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>

      {/* ⭐ SHINY DARK GRADIENT BUTTON */}
      <Link
        to='/contact'
        className='px-8 py-3 rounded-xl 
        bg-gradient-to-br from-black 
        via-gray-600  to-black 
        text-white font-semibold shadow-lg shadow-purple-800/40
        hover:opacity-90 transition active:scale-95'
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
