import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  console.log(profile);
  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Welcome to My World!</h1>
      <p className="text-lg leading-relaxed">
        Hey there! I'm{" "}
        <strong className="text-blue-700 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name || "Anshu Raj"}
        </strong>, a passionate storyteller, full-stack developer, and digital explorer. This blog is my creative space where I bridge the gap between technology, personal growth, and the art of communication. Whether you're here to learn, be inspired, or just explore new ideas, you're in the right place.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">What Drives Me</h2>
      <p className="text-lg leading-relaxed">
        My journey started with a spark of curiosity — how can technology make our lives easier? That question led me to dive deep into the world of coding, web development, and everything in between. But beyond the code, I discovered my true passion: sharing knowledge. Writing, creating, and teaching have become my way to connect with amazing people like you and empower others to achieve their goals.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">What You'll Find Here</h2>
      <p className="text-lg leading-relaxed">
        This blog is a mix of technical deep dives and personal reflections. Here’s a sneak peek into what you’ll discover:
      </p>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>
          <strong>Tech Tutorials:</strong> From beginner-friendly guides to advanced topics in web development, I break down complex concepts into easy-to-follow steps.
        </li>
        <li>
          <strong>Freelancing Insights:</strong> Real-world advice from my freelancing journey — how to land gigs, manage projects, and grow your career.
        </li>
        <li>
          <strong>Personal Growth:</strong> The intersection of tech and life. How do we balance productivity, creativity, and well-being in the fast-paced digital age?
        </li>
        <li>
          <strong>Latest Tech Trends:</strong> Stay ahead of the curve with updates on the latest innovations, tools, and industry shifts that are shaping the future.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">My Expertise</h2>
      <p className="text-lg leading-relaxed">
        As a developer, my skill set spans both front-end and back-end technologies. Whether it's creating pixel-perfect user interfaces or architecting scalable server-side applications, I’m passionate about delivering quality digital experiences.
      </p>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>
          <strong>Front-End Mastery:</strong> React.js, HTML5, CSS3 — designing responsive, visually appealing websites that look great on any device.
        </li>
        <li>
          <strong>Back-End Proficiency:</strong> Expertise in Node.js, Express.js, and database management using MongoDB and SQL. Crafting robust, efficient back-end systems.
        </li>
        <li>
          <strong>DevOps and Cloud:</strong> Skilled with Docker, CI/CD pipelines, and cloud platforms like AWS and Google Cloud, ensuring smooth deployments and scalability.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-800">Why I Blog</h2>
      <p className="text-lg leading-relaxed">
        Blogging allows me to share my experiences, insights, and lessons learned on this journey. It’s a platform where I can connect with like-minded individuals, spark discussions, and create a community of learners and innovators. Every post is crafted with care, aiming to inspire, inform, and empower you in your own pursuits.
      </p>

      <h2 className="text-xl font-semibold text-blue-800">Beyond Tech: My Inspirations</h2>
      <p className="text-lg leading-relaxed">
        When I’m not coding or writing, you’ll find me exploring new hobbies, diving into books, or enjoying a good game of cricket. My biggest inspiration? My family and close friends, especially my twin brother, whose unwavering support has been a constant motivator in my life.
      </p>
      <br />
      <p className="text-lg">
        So, stick around! Whether you're a fellow developer, a tech enthusiast, or just someone curious about life’s intricacies, there’s something here for you. Let’s learn, grow, and create together.
      </p>
    </div>
  );
}

export default About;
