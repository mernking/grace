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

const BlogPost = ({ params }) => {
  const slug = params.slug; // Get slug from params
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug)
      return <h1 className="font-grace text-red-500">Slug not found</h1>; // Exit if slug is undefined
    fetchBlog(slug)
      .then(setBlog)
      .catch((err) => setError(err.message));
  }, [slug]);

  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!blog) return <p className="text-center text-gray-500">Getting blog</p>;

  return (
    <div className="flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <div className="prose max-w-none">
        <p>{blog.author}</p>
        <div className="blog_sections">
          {blog.sections &&
            blog.sections.map((section, index) => (
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
