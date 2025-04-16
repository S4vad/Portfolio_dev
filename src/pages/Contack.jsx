import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const formRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_P_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_API
      )
      .then(() => {
        toast.success("Email sent successfully!", {
          style: {
            backgroundColor: "#737373",
            color: "#FFFFFF",
            maxWidth: "250px",
            width: "100%",
            padding: "8px",
            fontSize: "12px",
            borderRadius: "6px",
          },

          position: "top-center",
        });
        setShowForm(false);
        setFormData({ username: "", email: "", phone: "" });
      })
      .catch(() => {
        toast.error("❌ Failed to send email. Try again later.", {
          style: {
            backgroundColor: "#737373",
            color: "#FFFFFF",
            maxWidth: "250px",
            width: "100%",
            padding: "8px",
            fontSize: "12px",
            borderRadius: "6px",
          },
          position: "top-center",
        });
      });
  };

  return (
    <div className="relative ">
      <button
        onClick={() => setShowForm(!showForm)}
        aria-expanded={showForm}
        ref={buttonRef}
        className="items-center hover:scale-105 px-3 py-1 flex border border-gray-500 hover:border-neutral-500 transition-all gap-2 rounded-3xl animate-bounce sm:animate-none"
      >
        <div className="dark:text-white text-[#212529]">
          <svg
            fill="currentColor"
            height="11"
            width="11"
            version="1.1"
            id="XMLID_127_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xml:space="preserve"
            stroke="currentColor"
            strokeWidth="0.00024"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g id="connect">
                <g>
                  <path
                    d="M5.9,24c-1.6,0-3.1-0.6-4.2-1.7C0.6,21.2,0,19.7,0,18.1c0-1.6,0.6-3.1,1.7-4.2l3.8-3.8l2,2l2.8-2.8l1.4,1.4l-2.8,2.8 
          l1.6,1.6l2.8-2.8l1.4,1.4l-2.8,2.8l2,2l-3.7,3.8C9,23.3,7.5,24,5.9,24z M5.5,12.9l-2.3,2.3C2.4,16,2,17,2,18s0.4,2,1.2,2.8 
          c1.5,1.5,4.1,1.5,5.6,0l2.3-2.4L5.5,12.9z M18.5,13.9l-8.4-8.4l3.7-3.8C14.9,0.6,16.5,0,18,0c1.5,0,3,0.6,4.2,1.7 
          C23.4,2.8,24,4.3,24,5.9s-0.6,3.1-1.7,4.2L18.5,13.9z M13,5.5l5.5,5.5l2.3-2.3C21.6,7.9,22,7,22,5.9c0-1-0.4-2-1.2-2.8 
          c-1.5-1.5-4-1.5-5.6,0L13,5.5z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <span className="dark:text-[#FFFFFF] text-[11px] text-[#212529] hidden sm:block">
          Get in Touch
        </span>
   
      </button>

      <AnimatePresence>
        {showForm && (
          <motion.div
            ref={formRef}
            aria-hidden={!showForm}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute dark:bg-[#121212] right-0 z-10 bg-white text-white p-3 md:p-4 border border-gray-600 rounded-lg shadow-lg w-[192px] md:w-[250.3px] mt-3"
          >
            <h2 className="text-md font-bold mb-3 dark:text-[#FFFFFF] text-[#212529] ">
              Say Hello 👋
            </h2>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                value={formData.username}
                onChange={handleChange}
                className="w-full text-[#121212] dark:text-gray-200 px-2 py-1 bg-transparent border border-gray-500 rounded"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1 text-[#121212] dark:text-gray-200 bg-transparent border border-gray-500 rounded"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-2 py-1 text-[#121212] dark:text-gray-200  bg-transparent border border-gray-500 rounded"
                required
              />

              <button
                type="submit"
                className="dark:bg-neutral-600 bg-gray-300 hover:bg-gray-400 text-[#121212] dark:text-white px-4 py-1 rounded-lg dark:hover:bg-neutral-700 w-full"
              >
                Connect
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
