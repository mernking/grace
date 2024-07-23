"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const fetchBlog = async (slug) => {
  try {
    const response = await axios.get(`/api/blogs/${slug}`);
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

const BlogPost = ({ blog }) => {
  const [clientBlog, setClientBlog] = useState(blog);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!clientBlog) {
      fetchBlog(blog.slug)
        .then(setClientBlog)
        .catch((err) => setError(err.message));
    }
  }, [blog.slug]);

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!clientBlog)
    return <p className="text-center text-gray-500">Getting blog</p>;

  return (
    <div className="flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-2xl font-bold mb-4">{clientBlog.title}</h1>
      <div className="prose max-w-none">
        <p>{clientBlog.author}</p>
        <div className="blog_sections">
          {clientBlog.sections &&
            clientBlog.sections.map((section, index) => (
              <div key={index}>
                <h2>{section.heading}</h2>
                <p>{section.content}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
