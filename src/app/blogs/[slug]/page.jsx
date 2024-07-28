// app/blogs/[slug]/page.jsx
import axios from "axios";

export async function generateStaticParams() {
  try {
    const response = await axios.get("/api/blogs");
    if (response.status === 200) {
      const blogs = response.data.blogs; // Adjust based on your API response
      return blogs.map((blog) => ({
        slug: blog.slug,
      }));
    } else {
      throw new Error("Failed to fetch blogs");
    }
  } catch (err) {
    console.error(err.message || "An error occurred");
    return [];
  }
}

export default async function Page({ params }) {
  const { slug } = params;

  try {
    const response = await axios.get(`/api/blogs/${slug}`);
    if (response.status === 200) {
      const blog = response.data.blog;
      return (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      );
    } else {
      throw new Error("Blog not found");
    }
  } catch (err) {
    return <div>An error occurred: {err.message || "An error occurred"}</div>;
  }
}
