import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

// REMOVE this line, as you want SSG, not forced SSR
// export const dynamic = 'force-dynamic';

// This function is required for SSG in dynamic routes.
// It tells Next.js which paths (slugs) to pre-render at build time.
export async function generateStaticParams() {
  // 1. Fetch the list of all blog posts or slugs from your API.
  //    Make sure your API has an endpoint that provides this list.
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, // <-- Replace with your actual endpoint that lists all blogs
    {
      // Use 'force-cache' or default caching. This fetch happens ONCE during the build.
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    // Handle the error if fetching the list fails during build.
    console.error(
      "Failed to fetch blog list for SSG:",
      res.status,
      res.statusText
    );
    // You might want to throw an error to fail the build, or return empty array
    // if you want the build to succeed but not build any blog pages.
    return []; // Returning empty array means no blog pages will be statically generated
  }

  const blogs = await res.json(); // Assuming your API returns an array of blog objects

  // 2. Map the fetched data to the required format:
  //    An array of objects, where each object has the route parameters.
  if (!Array.isArray(blogs)) {
    console.error("Expected blogs to be an array but got:", blogs);
    return []; // Return an empty array if blogs is not an array
  }
  return blogs.map((blog) => ({
    slug: blog.title, // <-- Assuming each blog object has a 'title' property
  }));
}

export async function generateMetadata({ params }) {
  // This fetch runs for each slug returned by generateStaticParams, DURING THE BUILD.
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${params.slug}`,
    {
      // Cache the fetch result for this specific slug during the build.
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    // This should ideally not be reached during a successful build if generateStaticParams worked
    // correctly and your single-post endpoint is reliable.
    // If it does happen, the metadata might be missing for that specific slug during build.
    return {
      title: "Post Not Found | Boundless Bolt",
    };
  }

  const post = await res.json();

  return {
    title: `${post.title} | Boundless Bolt Blog`,
    description: post.content.slice(0, 150).replace(/\n/g, " "),
    openGraph: {
      title: `${post.title} | Boundless Bolt Blog`,
      description: post.content.slice(0, 150).replace(/\n/g, " "),
      images: [post.coverImg],
    },
  };
}

export default async function BlogSlugPage({ params }) {
  // This fetch also runs for each slug returned by generateStaticParams, DURING THE BUILD.
  // The result is used to render the page HTML that gets saved as a static file.
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${params.slug}`,
    {
      cache: "force-cache", // SSG: Cache the fetch result during the build process
    }
  );

  if (!res.ok) {
    // This check is primarily for runtime, if somehow a page is requested that wasn't built.
    // notFound() is handled at request time.
    return notFound(); // Will render the not-found page if this route is accessed at runtime without being built
  }

  const post = await res.json();
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <article className="max-w-2xl mx-auto p-4">
      <img
        src={
          post.coverImg ||
          "https://placehold.co/600x400/000000/FFF?text=No\nMedia"
        }
        alt={post.title}
        className="rounded-xl mb-8 w-full object-cover max-h-80"
      />
      <h1 className="text-3xl font-bold text-[#39aeb9] mb-6">{post.title}</h1>
      <div
        className="prose prose-invert text-[#c9d1d4] max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
