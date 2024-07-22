import connectToDatabase from "../../../../../lib/mongoose";
import blog from "../../../../../models/blog";

// Fetch all blog slugs
async function fetchBlogSlugs() {
  await connectToDatabase();
  const blogs = await blog.find({}, "slug").exec();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

// Implement the generateStaticParams function
export async function generateStaticParams() {
  const slugs = await fetchBlogSlugs();
  return slugs.map((slugObj) => ({
    params: {
      slug: slugObj.slug,
    },
  }));
}

// Fetch the blog data for the specific slug
export async function GET(req, res) {
  await connectToDatabase();

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const slug = req.query; // Get the slug from the query parameters
  console.log(slug);
  const blogPost = await blog.findOne({ slug }).lean();

  if (!blogPost) {
    return Response.json({ message: "Blog not found" });
  }

  return Response.json(blogPost);
}
