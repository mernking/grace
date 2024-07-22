import connectToDatabase from "../../../lib/mongoose";
import Blog from "../../../models/blog";

// Fetch all blog slugs
async function fetchBlogSlugs() {
  await connectToDatabase();
  const blogs = await Blog.find({}, "slug").exec();
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
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { slug } = req.query;
  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  return res.status(200).json(blog);
}