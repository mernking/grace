// app/blogs/[slug]/page.jsx
import axios from "axios";
import Image from "next/image";

const API_BASE_URL = process.env.API_BASE_URL ||" http://localhost:3000/";

// Static parameters generation for dynamic routes
export async function generateStaticParams() {
  console.log(API_BASE_URL)
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

// Metadata generation for each page
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const response = await axios.get(`${API_BASE_URL}/api/blogs/${slug}`);
    if (response.status === 200) {
      const blog = response.data;

      return {
        title: blog.title,
        description:
          blog.description || "Read more about this topic on our blog.",
        openGraph: {
          title: blog.title,
          description:
            blog.description || "Read more about this topic on our blog.",
          images: [blog.image || "/default-image.jpg"],
        },
      };
    } else {
      return {
        title: "Blog Post Not Found",
        description: "The blog post you are looking for does not exist.",
        openGraph: {
          title: "Blog Post Not Found",
          description: "The blog post you are looking for does not exist.",
          images: [],
        },
      };
    }
  } catch (err) {
    console.error(err.message || "An error occurred while generating metadata");
    return {
      title: "Error",
      description: "An error occurred while fetching blog data.",
      openGraph: {
        title: "Error",
        description: "An error occurred while fetching blog data.",
        images: [],
      },
    };
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
        <>
          <article className="flex flex-col justify-center items-center">
            <header className="text-center">
              <h1 className="text-3xl px-1 pb-3">{blog.title}</h1>
              <p className="px-1 text-left">Author: {blog.author}</p>
              <p className="px-1 text-left">Date: {blog.date}</p>
            </header>

            <div className="flex flex-col gap-5 justify-center items-center">
              {blog.sections.map((section) => (
                <section
                  key={section._id}
                  className="flex flex-col justify-center items-center"
                >
                  {/* Conditionally render the section image if `section.image` is available */}
                  {section.image && (
                    <figure className="rounded-lg px-1">
                      <Image
                        src={section.image} // Use the full URL directly
                        alt={section.heading} // Updated alt text for better accessibility
                        width={800} // Adjust based on the actual image size or desired display size
                        height={600} // Adjust based on the actual image size or desired display size
                        layout="responsive" // Optional: adjusts the image size responsively
                      />
                      <figcaption className="text-center">
                        {section.heading}
                      </figcaption>
                    </figure>
                  )}
                  <h2 className="text-center text-2xl px-1">
                    {section.heading}
                  </h2>
                  <p className="px-1 max-w-[850px]">{section.content}</p>

                  {/* Handle subsections if they exist */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="flex flex-col gap-3 justify-center items-center">
                      {section.subsections.map((subsection) => (
                        <section
                          key={subsection._id}
                          className="flex flex-col justify-center items-center"
                        >
                          {/* Conditionally render the subsection image if `subsection.image` is available */}
                          {subsection.image && (
                            <figure className="rounded-lg px-1">
                              <Image
                                src={subsection.image} // Use the full URL directly
                                alt={subsection.subheading} // Updated alt text for better accessibility
                                width={800} // Adjust based on the actual image size or desired display size
                                height={600} // Adjust based on the actual image size or desired display size
                                layout="responsive" // Optional: adjusts the image size responsively
                              />
                              <figcaption className="text-center">
                                {subsection.subheading}
                              </figcaption>
                            </figure>
                          )}
                          <h3 className="text-center text-xl px-1">
                            {subsection.subheading}
                          </h3>
                          <p className="px-1 max-w-[850px]">
                            {subsection.content}
                          </p>
                        </section>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </article>
        </>
      );
    } else {
      throw new Error("Blog not found");
    }
  } catch (err) {
    return <div>An error occurred: {err.message || "An error occurred"}</div>;
  }
}
