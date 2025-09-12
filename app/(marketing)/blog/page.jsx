import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import BlogCard from "@/components/blog/BlogCard";

export const metadata = {
  title: "Boundless Bolt Blog | Insights on Web Development, Automation & SEO",
  description:
    "Read the Boundless Bolt blog for expert insights, tutorials, and trends in web development, automation, Web3, APIs, SaaS, Shopify, and SEO. Stay ahead with actionable guides to grow your business online.",
  openGraph: {
    title:
      "Boundless Bolt Blog | Insights on Web Development, Automation & SEO",
    description:
      "Discover articles and guides from Boundless Bolt on building modern websites, creating automation systems, API integration, SaaS development, Shopify, and SEO strategies.",
    type: "website",
    locale: "en_US",
    url: "https://boundlessbolt.com/blog",
    siteName: "Boundless Bolt Blog",
  },
};


const postsDirectory = path.join(process.cwd(), "content/blogs");

function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      slug,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      <div className="w-full md:max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <BlogCard post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}
