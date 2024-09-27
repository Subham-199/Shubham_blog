import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../utils";

function Detail() {
  const { id } = useParams();
  const [blog, setBlog] = useState({}); // Rename to blog for clarity
  console.log(blog);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/single-blog/${id}`,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
        setBlog(data); // Assuming the response contains a single blog
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch blog details");
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div>
      <div>
        {blog && (
          <section className="container mx-auto p-4">
            <div className="text-blue-500 uppercase text-xs font-bold mb-4">
              {blog?.category}
            </div>
            <h1 className="text-4xl font-bold mb-6">{blog?.title}</h1>
            <div className="flex items-center mb-6">
              <img
                src={blog?.adminPhoto}
                alt="author_avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <p className="text-lg font-semibold">{blog?.adminName}</p>
            </div>

            <div className="flex flex-col md:flex-row">
              {blog?.blogImage && (
                <img
                  src={blog?.blogImage?.url}
                  alt="mainblogsImg"
                  className="md:w-1/2 w-full h-[500px] mb-6 rounded-lg shadow-lg cursor-pointer border"
                />
              )}
              <div className="md:w-1/2 w-full md:pl-6">
                <p className="text-lg mb-6">{blog?.about}</p>
                {/* Add more content here if needed */}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default Detail;
