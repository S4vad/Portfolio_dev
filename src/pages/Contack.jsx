import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false); 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

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
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="items-center hover:scale-105 px-3 py-1 flex border border-gray-500 hover:border-neutral-500 transition-all gap-2 rounded-3xl"
      >
        <div>
          <svg
            fill="white"
            height="15"
            width="15"
            version="1.1"
            id="XMLID_127_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xml:space="preserve"
            stroke="#000000"
            stroke-width="0.00024000000000000003"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="connect">
                {" "}
                <g>
                  {" "}
                  <path d="M5.9,24c-1.6,0-3.1-0.6-4.2-1.7C0.6,21.2,0,19.7,0,18.1c0-1.6,0.6-3.1,1.7-4.2l3.8-3.8l2,2l2.8-2.8l1.4,1.4l-2.8,2.8 l1.6,1.6l2.8-2.8l1.4,1.4l-2.8,2.8l2,2l-3.7,3.8C9,23.3,7.5,24,5.9,24z M5.5,12.9l-2.3,2.3C2.4,16,2,17,2,18s0.4,2,1.2,2.8 c1.5,1.5,4.1,1.5,5.6,0l2.3-2.4L5.5,12.9z M18.5,13.9l-8.4-8.4l3.7-3.8C14.9,0.6,16.5,0,18,0c1.5,0,3,0.6,4.2,1.7 C23.4,2.8,24,4.3,24,5.9s-0.6,3.1-1.7,4.2L18.5,13.9z M13,5.5l5.5,5.5l2.3-2.3C21.6,7.9,22,7,22,5.9c0-1-0.4-2-1.2-2.8 c-1.5-1.5-4-1.5-5.6,0L13,5.5z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <span className="text-[#FFFFFF] text-[12px]">Let's Connect</span>
      </button>

      {showForm && (
        <div className="absolute bg-[#121212] text-white p-3 md:p-4 border border-gray-600 rounded-lg shadow-l  w-[192px] md:w-[250.3px]  mt-3">
          <h2 className="text-md font-bold mb-3">Let's Connect</h2>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-2 py-1 bg-transparent border border-gray-500 rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2 py-1 bg-transparent border border-gray-500 rounded"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-2 py-1 bg-transparent border border-gray-500 rounded"
              required
            />

            <button
              type="submit"
              className="bg-neutral-600 text-white px-4 py-1 rounded-lg hover:bg-neutral-500 w-full"
            >
              Connect
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
