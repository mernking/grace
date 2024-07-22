// pages/blogs/[slug].js

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
    slug: slugObj.slug,
  }));
}

// Page Component
const BlogPage = ({ blog }) => {
  // Render your blog page content here
  return <div>{blog.title}</div>;
};

// Fetch the blog data for the specific slug
export async function getStaticProps({ params }) {
  await connectToDatabase();
  const slug = params.slug;
  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: JSON.parse(JSON.stringify(blog)), // serialize the blog data
    },
  };
}

export default BlogPage;
