import connectToDatabase from "../../../../lib/mongoose";
import Blog from "../../../../models/blog";

export async function GET(req, res) {
  await connectToDatabase();

  try {
    const blog = await Blog.find({});
    if (!blog) {
      return Response.json({ error: "Blog not found" });
    }
    return Response.json({ blog: blog });
  } catch (error) {
    return Response.json({ error: "Blog not found" });
  }
}
