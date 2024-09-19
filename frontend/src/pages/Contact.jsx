import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: "b6b71d58-32c7-4a14-bd08-75ab66760c4b",
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Message sent successfully");
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="text-sm text-red-500 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-sm text-red-500 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-yellow-600 duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <FaPhone className="text-red-500" />
                <button
                  onClick={() => setShowPhone(!showPhone)}
                  className="text-blue-600 hover:underline"
                >
                  {showPhone ? (
                    <a href="tel:+917079898902">+91 7079898902</a>
                  ) : (
                    "Show Phone Number"
                  )}
                </button>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-pink-500" />
                <button
                  onClick={() => setShowEmail(!showEmail)}
                  className="text-blue-600 hover:underline"
                >
                  {showEmail ? (
                    <a href="mailto:anshuraj2771@gmail.com">anshuraj2771@gmail.com</a>
                  ) : (
                    "Show Email Address"
                  )}
                </button>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-green-500" />
                <span>Delhi, NCR, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaLinkedin className="text-blue-600" />
                <button
                  onClick={() => setShowLinkedIn(!showLinkedIn)}
                  className="text-blue-600 hover:underline"
                >
                  {showLinkedIn ? (
                    <a
                      href="https://www.linkedin.com/in/anshuraj09/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  ) : (
                    "Show LinkedIn Profile"
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
