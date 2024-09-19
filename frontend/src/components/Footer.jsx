import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 text-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-white mb-4">About Me</h2>
            <p className="text-sm">
              Hi, I'm <span className="font-bold text-yellow-300">Anshu Raj</span>, a full-stack developer and passionate blogger. 
              I focus on creating high-quality content related to tech, coding, and personal growth. Follow my journey as I share insights on the latest trends in development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-300">Tech Blogs</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">Project Tutorials</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">Freelancing Tips</a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">Career Advice</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-white mb-4">Connect</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:anshuraj2771@gmail.com" className="hover:text-yellow-300">
                  <FaEnvelope className="inline-block mr-2" />
                  Email Me
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/anshuraj09/" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
                  <FaLinkedin className="inline-block mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/Anshuraj09" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
                  <FaGithub className="inline-block mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-yellow-300">
                  <BsYoutube className="inline-block mr-2" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Online Game Section */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-semibold text-gray-100 mb-4">Play Our Blog Game</h2>
          <a
            href="https://poki.com/en/g/moto-x3m"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Play Now
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Anshu Raj. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="https://github.com/Anshuraj09" target="_blank" rel="noreferrer">
              <FaGithub className="h-5 w-5 hover:text-yellow-300" />
            </a>
            <a href="https://www.linkedin.com/in/anshuraj09/" target="_blank" rel="noreferrer">
              <FaLinkedin className="h-5 w-5 hover:text-yellow-300" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              <BsYoutube className="h-5 w-5 hover:text-yellow-300" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
