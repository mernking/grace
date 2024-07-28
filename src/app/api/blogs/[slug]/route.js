import connectToDatabase from "../../../../../lib/mongoose";
import blog from "../../../../../models/blog";

// Fetch all blog IDs
async function fetchBlogIds() {
  await connectToDatabase();
  const blogs = await blog.find({}, "_id").exec();
  console.log("kings blog:", blogs); // Debugging line to see fetched blogs
  return blogs.map((blog) => ({ id: blog._id.toString() })); // Convert ObjectId to string
}

// Implement the generateStaticParams function
export async function generateStaticParams() {
  const ids = await fetchBlogIds();
  console.log("Generated IDs:", ids); // Debugging line to see generated IDs
  return ids.map((idObj) => ({
    params: {
      id: idObj.id,
    },
  }));
}

// Fetch the blog data for the specific ID
export async function GET(req) {
  try {
    await connectToDatabase();

    // Extract ID from URL path
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);
    const id = pathname.split("/").pop().trim(); // Extract ID and trim any extra whitespace

    console.log("kings id api test", id);

    if (req.method !== "GET") {
      return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
        status: 405,
      });
    }

    // Use the ID to find the blog post
    const blogPost = await blog.findById(id).lean();
    console.log("kings awaited blog api test", blogPost);
    if (!blogPost) {
      return new Response(JSON.stringify({ message: "Blog not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(blogPost), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
}
