import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogLayout from "../../../../components/blog/BlogLayout";
import Image from "next/image";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ""),
  }));
}

async function getPost(slug) {
  const decodedSlug = decodeURIComponent(slug);
  const fullPath = path.join(postsDirectory, `${decodedSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
}

// ✅ Dynamic SEO metadata per blog post
export async function generateMetadata({ params }) {
  const { data } = await getPost(params.slug);

  const baseUrl = "https://boundlessbolt.com"; // change if hosting elsewhere
  const url = `${baseUrl}/blog/${params.slug}`;

  return {
    title: data.title
      ? `${data.title} | Boundless Bolt Blog`
      : "Boundless Bolt Blog",
    description:
      data.excerpt ||
      "Explore insights on web development, automation, APIs, Web3, SaaS, Shopify, and SEO from Boundless Bolt.",
    openGraph: {
      title: data.title || "Boundless Bolt Blog",
      description:
        data.excerpt ||
        "Explore insights on web development, automation, APIs, Web3, SaaS, Shopify, and SEO from Boundless Bolt.",
      url,
      type: "article",
      siteName: "Boundless Bolt Blog",
      images: [
        {
          url: data.image || `${baseUrl}/default-og.png`,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { data, content } = await getPost(params.slug);

  return (
    <BlogLayout>
      <div className="w-full md:max-w-[1200px]">
        <div className="relative min-h-screen w-full">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold my-8">{data.title}</h1>
        <MDXRemote source={content} />
      </div>
    </BlogLayout>
  );
}
