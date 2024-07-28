"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/blogs");
        console.log("API response:", res.data); // Log the response data
        if (Array.isArray(res.data.blog)) {
          setBlogs(res.data.blog);
          console.log("Blogs:", blogs);
        } else {
          setError("Unexpected response format");
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, [blogs]);

  if (loading) return <p className="text-center font-grace">Blogs loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!blogs) return <p>No blog found 🔥🔥🔥</p>;

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="font-grace">Blogs list</h1>
      <ul>
        {blogs.map((blog) => (
          <div key={blog._id} className="hover:underline hover:text-primary transition-all py-2">
            <Link href={`/blogs/${blog._id}`} key={blog._id}>
              <li>{blog.title}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
