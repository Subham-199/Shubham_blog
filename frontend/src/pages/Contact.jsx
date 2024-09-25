import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function ProfilePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // New phone field
    message: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "b6b71d58-32c7-4a14-bd08-75ab66760c4b", // Web3Forms access key
        ...formData,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setIsSubmitted(true);
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      {/* Profile Picture and Info */}
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md transition-transform transform hover:scale-105">
        <img
          src="https://drive.google.com/file/d/1GLUK5JXZLAD9RItD2TCu9b5bm5T9B9Rj/view"
          alt="Profile"
          className="rounded-full w-24 h-24 mx-auto"
        />
        <h2 className="text-xl font-semibold mt-4 text-gray-900">Anshu Raj</h2>
        <p className="text-gray-600">Software Developer | Content Creator</p>
        <p className="text-gray-600">Ecosystem Builder | Tech Educator</p>
      </div>
        
      {/* Links */}
      <div className="w-full max-w-md mt-6">
        <a
          href="https://www.linkedin.com/in/anshuraj09/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white shadow-lg rounded-lg p-4 mb-4 flex items-center justify-between transition-transform transform hover:scale-105"
        >
          <FaLinkedin className="text-blue-600 text-xl" />
          <span className="text-gray-800">LinkedIn</span>
        </a>

        <a
          href="https://github.com/Anshuraj09"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white shadow-lg rounded-lg p-4 mb-4 flex items-center justify-between transition-transform transform hover:scale-105"
        >
          <FaGithub className="text-black text-xl" />
          <span className="text-gray-800">GitHub</span>
        </a>

        <a
          href="mailto:anshuraj2771@gmail.com"
          className="block bg-white shadow-lg rounded-lg p-4 mb-4 flex items-center justify-between transition-transform transform hover:scale-105"
        >
          <FaEnvelope className="text-red-600 text-xl" />
          <span className="text-gray-800">Email</span>
        </a>

        <a
          href="tel:+917079898902"
          className="block bg-white shadow-lg rounded-lg p-4 mb-4 flex items-center justify-between transition-transform transform hover:scale-105"
        >
          <FaPhone className="text-green-600 text-xl" />
          <span className="text-gray-800">Call Me</span>
        </a>
      </div>

      {/* Contact Me Button */}
      <button
        onClick={handleModalToggle}
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Contact Me
      </button>

      {/* Modal for Contact Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={handleModalToggle}
            >
              ✕
            </button>

            {isSubmitted ? (
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-600">Message Sent Successfully!</h3>
                <p className="mt-4">Thank you for getting in touch!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-lg font-semibold mb-4 text-center">Contact Me</h3>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
