// generateStaticParams.js

import connectToDatabase from "../../../../lib/mongoose";
import Blog from "../../../../models/blog";

export async function generateStaticParams() {
  await connectToDatabase();

  // Fetch all blog slugs
  const blogs = await Blog.find({}, { slug: 1 }); // Assuming your Blog schema has a slug field

  return blogs
    .filter((blog) => blog._id) // Ensure slug is defined
    .map((blog) => ({
      slug: String(blog._id), // Convert slug to string
    }));
}
