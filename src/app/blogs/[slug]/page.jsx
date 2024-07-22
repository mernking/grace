"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const fetchBlog = async (id) => {
  try {
    const response = await axios.get(`/api/blogs/${id}`);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    } else {
      throw new Error("Blog not found");
    }
  } catch (err) {
    throw new Error(err.message || "An error occurred");
  }
};

const BlogPost = ({ params }) => {
  const blogId = params.id;
  const [blog, setBlog] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog(blogId).then(setBlog).catch(setError);
  }, [blogId]);

  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  if (!blog)
    return <p className="text-center text-gray-500">No blog found 🔥🔥🔥</p>;

  return (
    <div className="flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <div className="prose max-w-none">
        <p>{blog.title}</p>
      </div>
    </div>
  );
};

export default BlogPost;
