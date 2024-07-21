import connectToDatabase from "../../../../../lib/mongoose";
import Blog from "../../../../../models/blog";

export async function GET(request, { params }) {
  await connectToDatabase();
  const slug = params.slug;

  try {
    const blog = await Blog.findById(slug);
    if (!blog) {
      return Response.json({ blog: `!blog ${slug}` });
    }
    return Response.json({ blog: blog });
  } catch (error) {
    return Response.json({ error: `blog ${slug} not found` });
  }
}
