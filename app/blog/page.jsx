// app/blog/page.js

import Link from "next/link";

// Keep your static metadata
export const metadata = {
  title: "Boundless Bolt Blog | Insights on Web Dev, Automation & SEO",
  description:
    "Read the latest insights, tutorials, and strategies from Boundless Bolt. Stay updated on web development, automation systems, SEO, SaaS trends, and tech innovations driving digital growth.",
  openGraph: {
    title: "Boundless Bolt Blog | Insights on Web Dev, Automation & SEO",
    description:
      "Read the latest insights, tutorials, and strategies from Boundless Bolt. Stay updated on web development, automation systems, SEO, SaaS trends, and tech innovations driving digital growth.",
  },
};

// Make the component 'async' so we can use await for fetching data.
// As a default Server Component, this will render on the server.
export default async function BlogPage() {
  // Fetch the list of blog posts from your API endpoint
  // This fetch happens on the server when the page is requested (or built if using default caching).
  // 'cache: "force-cache"' caches the result of this fetch indefinitely on the server.
  // For a blog list that might update occasionally, you might prefer
  // '{ next: { revalidate: 60 } }' for Incremental Static Regeneration (ISR),
  // which would revalidate the cache every 60 seconds. We'll use force-cache as a default here.
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
    cache: "force-cache", // Cache the list of blogs fetched from the API
  });

  // Handle potential errors during the fetch
  if (!res.ok) {
    console.error("Failed to fetch blog posts:", res.status, res.statusText);
    // Render an error message or an empty state gracefully
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 text-center text-red-500">
        Failed to load blog posts.
      </div>
    );
  }

  const blogPosts = await res.json();

  // Add a check to ensure the API returned an array
  if (!Array.isArray(blogPosts)) {
    console.error("API did not return an array for blog posts.");
    return (
      <div className="max-w-5xl mx-auto px-4 py-10 text-center text-red-500">
        Unexpected data format received.
      </div>
    );
  }

  // Helper function to truncate text safely
  const truncateText = (text, maxLength) => {
    if (!text || typeof text !== "string") return "";
    if (text.length <= maxLength) return text;
    // Simple truncation: cut at maxLength and add ellipsis
    return text.substring(0, maxLength) + "...";
    // A more advanced version could find the last word boundary before maxLength
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#39aeb9]">
        Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Map over the fetched blogPosts */}
        {blogPosts.map((post) => (
          <div
            key={post.slug} // Use the unique slug as the key
            className="bg-[#111418] border border-[#39aeb9] rounded-xl shadow-xl hover:shadow-cyan-400/30 transition flex flex-col overflow-hidden"
          >
            {/* Assuming your API response includes 'coverImg' */}
            {post.coverImg && (
              <img
                src={post.coverImg}
                alt={post.title || "Blog post cover image"} // Add alt text, fallback if title is missing
                className="h-44 w-full object-cover"
              />
            )}
            <div className="flex-1 flex flex-col p-5">
              {/* Assuming your API response includes 'title' */}
              {post.title && (
                <h2 className="text-lg text-[#39aeb9] font-bold mb-2">
                  {post.title}
                </h2>
              )}
              {/* Use truncated 'content' for the excerpt */}
              {/* Assuming your API response includes 'content' */}
              <p className="flex-1 text-sm mb-4 text-[#c9d1d4]">
                {truncateText(post.content, 150)}{" "}
                {/* Truncate content to ~150 chars */}
              </p>
              {/* Link to the individual blog post page */}
              {/* Assuming your API response includes 'slug' */}
              {post.slug && (
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-block underline text-[#39aeb9] hover:text-cyan-400 text-sm font-semibold"
                >
                  Read More
                </Link>
              )}
            </div>
          </div>
        ))}
        {/* Optional: Display a message if no posts are found */}
        {blogPosts.length === 0 && (
          <div className="col-span-full text-center text-[#c9d1d4]">
            No blog posts found yet.
          </div>
        )}
      </div>
    </div>
  );
}
