"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

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

  if (loading)
    return <p className="text-center font-grace">Blogs loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!blogs) return <p>No blog found 🔥🔥🔥</p>;

  //hello world

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="font-grace">Blogs list</h1>
      <ul>
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="hover:underline mt-5 flex flex-col gap-2 hover:text-primary transition-all py-2"
          >
            <Link
              className="flex flex-col gap-2 justify-center items-center"
              href={`/blogs/${blog._id}`}
              key={blog._id}
            >
              <Image
                className="rounded-lg"
                src={blog.image}
                alt={blog.title}
                width={300}
                height={200}
              />
              <li>{blog.title}</li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
