// [slug]/route.js

import connectToDatabase from "../../../../../lib/mongoose";
import Blog from "../../../../../models/blog";
import { generateStaticParams } from "./generateStaticParams";

export async function GET(req, { params }) {
  const { slug } = params;

  try {
    await connectToDatabase();

    // Replace hyphens with spaces to match the title in the database
    const formattedSlug = slug.replace(/-/g, " ");
    console.log("kings formmated slug", formattedSlug);

    // Find the blog post by the formatted title
    const blogPost = await Blog.findOne({ title: formattedSlug });

    if (!blogPost) {
      return new Response(
        JSON.stringify({ message: `Blog post "${slug}" not found` }),
        {
          status: 404,
        }
      );
    }

    return new Response(JSON.stringify(blogPost), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export { generateStaticParams };
