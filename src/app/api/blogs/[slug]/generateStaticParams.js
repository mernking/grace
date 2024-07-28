// generateStaticParams.js

import connectToDatabase from "../../../../../lib/mongoose";
import Blog from "../../../../../models/blog";

export async function generateStaticParams() {
  await connectToDatabase();

  // Fetch all blog slugs
  const blogs = await Blog.find({}, "slug"); // Assuming your Blog schema has a slug field

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
