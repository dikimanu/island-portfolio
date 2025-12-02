import React, { useRef, useState } from "react";
import { Alert } from "../components";
import EarthCanvas from "../models/EarthCanvas";
import StarsCanvas from "../models/StarsCanvas";
import useAlert from "../hooks/useAlert";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setForm({ name: "", email: "", message: "" });

          setTimeout(() => hideAlert(false), 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="relative flex xl:flex-row flex-col gap-10 max-container py-20 min-h-screen overflow-hidden">

      {/* 🌌 FIXED BACKGROUND STARS */}
      <div className="fixed-canvas">
        <StarsCanvas />
      </div>

      {/* 🌍 FIXED BACKGROUND EARTH */}
      <div className="fixed-canvas">
        <EarthCanvas />
      </div>

      {/* Alert */}
      {alert.show && <Alert {...alert} />}

      {/* FORM CARD */}
      <div
        className="flex-[0.75] bg-white/5 backdrop-blur-xl border border-white/10 
        p-10 rounded-3xl z-10 shadow-[0_0_30px_rgba(128,0,255,0.15)]"
      >
        <h2 className="text-white text-4xl font-bold mb-2">Contact Me</h2>
        <p className="text-gray-300 mb-10">
          Let’s get in touch! 🚀
        </p>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          {/* Name */}
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="bg-[#111] border border-[#333] text-white px-6 py-4 
                rounded-xl focus:border-purple-500 focus:ring-2 
                focus:ring-purple-600 outline-none transition placeholder-gray-500"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@gmail.com"
              className="bg-[#111] border border-[#333] text-white px-6 py-4 
                rounded-xl focus:border-purple-500 focus:ring-2 
                focus:ring-purple-600 outline-none transition placeholder-gray-500"
            />
          </label>

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-gray-200 font-medium mb-2">Your Message</span>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write something..."
              className="bg-[#111] border border-[#333] text-white px-6 py-4 
                rounded-xl focus:border-purple-500 focus:ring-2 
                focus:ring-purple-600 outline-none transition placeholder-gray-500"
            />
          </label>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-fit px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 
              to-indigo-600 text-white font-semibold shadow-lg 
              shadow-purple-800/40 hover:opacity-90 transition active:scale-95"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
