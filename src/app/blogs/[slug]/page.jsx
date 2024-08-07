// app/blogs/[slug]/page.jsx
import axios from "axios";
import Image from "next/image";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";

// Static parameters generation for dynamic routes
export async function generateStaticParams() {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/blogs`);
    if (response.status === 200) {
      const blogs = response.data; // Adjust based on your API response structure
      return blogs.map((blog) => ({
        slug: blog._id, // Ensure this matches the field you're using for slugs
      }));
    } else {
      throw new Error("Failed to fetch blogs");
    }
  } catch (err) {
    console.error(err.message || "An error occurred");
    return [];
  }
}

// Fetching and rendering blog page
export default async function Page({ params }) {
  const { slug } = params;

  try {
    const response = await axios.get(`${API_BASE_URL}/api/blogs/${slug}`);
    if (response.status === 200) {
      const blog = response.data;

      return (
        <div className="flex flex-col justify-center items-center">
          {/* Conditionally render the blog image if `blog.image` is available */}
          {blog.image && (
            <Image
              className="rounded-lg px-1"
              src={blog.image} // Use the full URL directly
              alt={blog.title}
              width={800} // Adjust based on the actual image size or desired display size
              height={600} // Adjust based on the actual image size or desired display size
              layout="responsive" // Optional: adjusts the image size responsively
            />
          )}
          <h2 className="text-center text-3xl px-1 pb-3">{blog.title}</h2>
          <p className="px-1 text-left">Author: {blog.author}</p>
          <p className="px-1 text-left">Date: {blog.date}</p>
          <div>
            {blog.sections.map((section) => (
              <div
                key={section._id}
                className="flex flex-col justify-center items-center"
              >
                {/* Conditionally render the section image if `section.image` is available */}
                {section.image && (
                  <Image
                    className="rounded-lg px-1"
                    src={section.image} // Use the full URL directly
                    alt={section.heading} // Updated alt text for better accessibility
                    width={800} // Adjust based on the actual image size or desired display size
                    height={600} // Adjust based on the actual image size or desired display size
                    layout="responsive" // Optional: adjusts the image size responsively
                  />
                )}
                <h3 className="text-center text-2xl px-1">{section.heading}</h3>
                <p className="px-1 max-w-[850px]">{section.content}</p>
                {/* If there are subsections, you can map through them here as well */}
                {section.subsections && section.subsections.length > 0 && (
                  <div>
                    {section.subsections.map((subsection) => (
                      <div
                        key={subsection._id}
                        className="flex flex-col justify-center items-center"
                      >
                        {/* Conditionally render the subsection image if `subsection.image` is available */}
                        {subsection.image && (
                          <Image
                            className="rounded-lg px-1"
                            src={subsection.image} // Use the full URL directly
                            alt={subsection.subheading} // Updated alt text for better accessibility
                            width={800} // Adjust based on the actual image size or desired display size
                            height={600} // Adjust based on the actual image size or desired display size
                            layout="responsive" // Optional: adjusts the image size responsively
                          />
                        )}
                        <h4 className="text-center text-xl px-1">
                          {subsection.subheading}
                        </h4>
                        <p className="px-1 max-w-[850px]">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      throw new Error("Blog not found");
    }
  } catch (err) {
    return <div>An error occurred: {err.message || "An error occurred"}</div>;
  }
}
