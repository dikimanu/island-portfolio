import React, { useRef, useState } from "react";
import { Alert } from "../components";
import EarthCanvas from "../models/EarthCanvas";
import StarsCanvas from "../models/StarsCanvas";
import useAlert from "../hooks/useAlert";

// Import social icons
import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import emailIcon from "../assets/icons/contact.svg";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const { alert, showAlert, hideAlert } = useAlert();

  // Handle input changes
  const handleChange = ({ target: { name, value } }) =>
    setForm({ ...form, [name]: value });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("Sending....");

    const formData = new FormData(e.target);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );
    formData.append("subject", "New Contact Message from Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });
        setForm({ name: "", email: "", message: "" });
        e.target.reset();
        setTimeout(() => hideAlert(false), 3000);
      } else {
        setResult("Error sending message");
        showAlert({
          show: true,
          text: "Oops! Something went wrong 😢",
          type: "danger",
        });
      }
    } catch (error) {
      console.error(error);
      setResult("Error sending message");
      showAlert({
        show: true,
        text: "Oops! Something went wrong 😢",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative flex flex-col gap-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20
      min-h-screen overflow-hidden bg-gradient-to-r from-black via-gray-800 to-black"
    >
      {/* Background Stars */}
      <StarsCanvas />

      {/* Alerts */}
      {alert.show && <Alert {...alert} />}

      {/* Contact Form Card */}
      <div
        className="w-full lg:w-full lg:order-1
        bg-white/5 backdrop-blur-xl border border-white/10
        p-6 sm:p-10 rounded-3xl z-10
        shadow-[0_0_30px_rgba(128,0,255,0.15)]"
      >
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-2">
          Contact Me
        </h2>
        <p className="text-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">
          Let’s get in touch! 🚀
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 sm:gap-8"
        >
          {/* Name */}
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium mb-2 text-sm sm:text-base">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="bg-[#111] border border-[#333]
              text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl
              focus:border-purple-500 focus:ring-2 focus:ring-purple-600
              outline-none transition placeholder-gray-500"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium mb-2 text-sm sm:text-base">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@gmail.com"
              required
              className="bg-[#111] border border-[#333]
              text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl
              focus:border-purple-500 focus:ring-2 focus:ring-purple-600
              outline-none transition placeholder-gray-500"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium mb-2 text-sm sm:text-base">
              Your Message
            </span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write something..."
              required
              className="bg-[#111] border border-[#333]
              text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl
              focus:border-purple-500 focus:ring-2 focus:ring-purple-600
              outline-none transition placeholder-gray-500"
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-fit px-8 sm:px-10 py-3 sm:py-4 rounded-xl
            bg-gradient-to-r from-purple-600 to-indigo-600
            text-white font-semibold shadow-lg shadow-purple-800/40
            hover:opacity-90 transition active:scale-95 text-sm sm:text-base"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Text */}
          {result && (
            <span
              className={`text-sm mt-2 ${
                result.includes("Successfully") ? "text-green-400" : "text-red-400"
              }`}
            >
              {result}
            </span>
          )}
        </form>

        {/* Social Links Section */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <span className="text-gray-400 text-sm">Or connect with me</span>
          <div className="flex gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/satyabrata-pal-03b5a7373"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition transform hover:-translate-y-1"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>

            {/* Email */}
            <a
              href="mailto:satyabratapal50@gmail.com"
              aria-label="Email"
              className="text-gray-400 hover:text-white transition transform hover:-translate-y-1"
            >
              <img src={emailIcon} alt="Email" className="w-6 h-6" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_satyabrata.pal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition transform hover:-translate-y-1"
            >
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Earth Model */}
      <div className="w-full lg:w-1/2 lg:mt-6 h-[300px] sm:h-[400px] md:h-[400px] lg:h-[350px] z-10 mx-auto order-2">
        <EarthCanvas />
      </div>
    </section>
  );
};

export default Contact;
