import connectToDatabase from "../../../../../lib/mongoose";
import Blog from "../../../../../models/blog";


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
    slug: slugObj.slug,
  }));
}

export async function GET(request, { params }) {
  await connectToDatabase();
  const slug = params.slug;

  try {
    const blog = await Blog.findById({ slug: slug });
    if (!blog) {
      return new Response(
        JSON.stringify({ error: `Blog with slug ${slug} not found` }),
        { status: 404 }
      );
    }
    return new Response(JSON.stringify({ blog: blog }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Error fetching blog with slug ${slug}` }),
      { status: 500 }
    );
  }
}
