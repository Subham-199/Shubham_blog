import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

function Business() {
  const { blogs } = useAuth();
  const businessBlogs = blogs?.filter((blog) => blog.category === "Business");

  if (!blogs) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-12 p-4">
      <h1 className="text-2xl font-bold mb-6">Business</h1>
      <p className="text-center mb-8">
        Stay ahead in the business world with the latest news and trends.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {businessBlogs && businessBlogs.length > 0 ? (
          businessBlogs.map((blog) => (
            <Link
              to={`/blog/${blog._id}`}
              key={blog._id}
              className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={blog?.blogImage?.url}
                alt={blog?.title || 'Blog image'}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold">{blog?.title}</h2>
                <p className="text-sm">{blog?.category}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex h-screen items-center justify-center">
            <p>No business blogs available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Business;
