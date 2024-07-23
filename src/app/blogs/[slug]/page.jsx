import connectToDatabase from "../../../../lib/mongoose";
import blog from "../../../../models/blog";
import BlogPost from "@/components/pages/Blogpost";

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
async function fetchBlog(slug) {
  await connectToDatabase();
  const blogPost = await blog.findById(slug);

  if (!blogPost) {
    throw new Error("Blog not found");
  }

  return blogPost;
}

export default async function BlogPage({ params }) {
  const blog = await fetchBlog(params.slug);
  return <BlogPost blog={blog} />;
}
