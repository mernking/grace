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
export async function GET(req) {
  await connectToDatabase();

  // Extract slug from URL path
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  const slug = pathname.split("/").pop().trim(); // Extract slug and trim any extra whitespace

  if (req.method !== "GET") {
    return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
    });
  }

  const blogPost = await blog.findById(slug);

  if (!blogPost) {
    return new Response(JSON.stringify({ message: "Kings Blog not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(blogPost), {
    headers: { "Content-Type": "application/json" },
  });
}
