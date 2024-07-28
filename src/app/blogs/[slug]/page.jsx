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
      console.log(blog);

      return (
        <div>
          <h2 className="text-center text-2xl">{blog.title}</h2>
          {/* Conditionally render the blog image if `blog.image` is available */}
          {blog.image && (
            <Image
              src={blog.image} // Use the full URL directly
              alt={blog.title}
              width={800} // Adjust based on the actual image size or desired display size
              height={600} // Adjust based on the actual image size or desired display size
              layout="responsive" // Optional: adjusts the image size responsively
            />
          )}
          <div>
            {blog.sections.map((section) => (
              <div key={section._id}>
                <h3 className="text-center text-2xl">{section.heading}</h3>
                {/* Conditionally render the section image if `section.image` is available */}
                {section.image && (
                  <Image
                    src={section.image} // Use the full URL directly
                    alt={section.heading} // Updated alt text for better accessibility
                    width={800} // Adjust based on the actual image size or desired display size
                    height={600} // Adjust based on the actual image size or desired display size
                    layout="responsive" // Optional: adjusts the image size responsively
                  />
                )}
                {/* If there are subsections, you can map through them here as well */}
                {section.subsections && section.subsections.length > 0 && (
                  <div>
                    {section.subsections.map((subsection) => (
                      <div key={subsection._id}>
                        <h4 className="text-center text-xl">
                          {subsection.heading}
                        </h4>
                        {/* Conditionally render the subsection image if `subsection.image` is available */}
                        {subsection.image && (
                          <Image
                            src={subsection.image} // Use the full URL directly
                            alt={subsection.heading} // Updated alt text for better accessibility
                            width={800} // Adjust based on the actual image size or desired display size
                            height={600} // Adjust based on the actual image size or desired display size
                            layout="responsive" // Optional: adjusts the image size responsively
                          />
                        )}
                        <p>{subsection.content}</p>
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
