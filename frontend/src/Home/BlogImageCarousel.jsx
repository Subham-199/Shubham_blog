import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider"; // Import useAuth to access authentication state
import { Canvas } from "@react-three/fiber"; // Import Canvas for 3D rendering
import { OrbitControls, Text } from "@react-three/drei"; // Import Text for 3D text

function BlogHomePage() {
  const { isAuthenticated } = useAuth(); // Accessing the authentication state

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Blog!</h1>
      <p className="text-xl mb-6">
        Explore insightful articles and share your thoughts with the community.
      </p>

      {/* Conditionally render the image based on authentication state */}
      {!isAuthenticated && (
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3NDB8MHwxfGFsbHwyfHx8fHx8fHwxNjA5NzA5MTU3&ixlib=rb-1.2.1&q=80&w=400"
            alt="Blog"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      <p className="text-lg mb-6">
        {isAuthenticated
          ? "Welcome back! Explore the latest blogs."
          : "Please log in to access the latest blogs and share your thoughts."}
      </p>

      {/* Render 3D text when user is authenticated */}
      {isAuthenticated && (
        <Canvas className="h-80 w-80 mb-8">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <Text
            position={[0, 0, 0]} // Adjust position as needed
            fontSize={1} // Size of the text
            color="white" // Text color
            anchorX="center" // Center the text horizontally
            anchorY="middle" // Center the text vertically
          >
            Welcome Back To My world!
            <meshStandardMaterial attach="material" color="white" />
          </Text>
        </Canvas>
      )}

      {!isAuthenticated && (
        <Link to="/login">
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-200 mb-2">
            Login to Read Blogs
          </button>
        </Link>
      )}

      <p className="text-sm mb-4">
        New here?{" "}
        <Link to="/signup" className="underline">
          Sign Up Now!
        </Link>
      </p>
      <p className="text-sm">
        If you already have an account, click{" "}
        <Link to="/login" className="underline">
          here
        </Link>{" "}
        to log in.
      </p>
    </div>
  );
}

export default BlogHomePage;
