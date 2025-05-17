import mongoose from "mongoose";
import fs from "fs";
import path from "path";

// Define the Blog schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  coverimg: {
    type: String,
    default: "https://placehold.co/600x400/000000/FFF?text=No\nMedia",
  },
  content: { type: String, required: true },
});

// Create the Blog model
const Blog = mongoose.model("Blog", blogSchema);

// Function to connect to MongoDB
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://davtekdon:AUnzhsuBMMrn0yV1@boundless.szd1u.mongodb.net/boundless",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process if the connection fails
  }
}

// Function to upload markdown content to MongoDB
async function uploadMarkdownContent() {
  try {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const files = fs.readdirSync(path.join(__dirname, "content", "extract"));

    // Read each file and convert it into a blog entry
    for (const file of files) {
      const filePath = path.join(__dirname, "content", "extract", file);
      const markdownContent = fs.readFileSync(filePath, "utf8");

      const blogData = parseMarkdownToBlog(file, markdownContent);
      await saveBlogToDatabase(blogData);
    }

    console.log("Markdown content uploaded to MongoDB!");
  } catch (err) {
    console.error("Error uploading markdown content:", err);
  }
}

// Parse markdown content and map to blog data
function parseMarkdownToBlog(file, markdownContent) {
  const title = file.replace(/_/g, " ").replace(".md", "");

  const blog = {
    title,
    coverimg: "https://placehold.co/600x400/000000/FFF?text=No\nMedia", // Add cover image logic if needed
    content: markdownContent, // Store the entire markdown as content
  };

  return blog;
}

// Save parsed blog data to MongoDB
async function saveBlogToDatabase(blogData) {
  const existingBlog = await Blog.findOne({ title: blogData.title });

  if (existingBlog) {
    existingBlog.coverimg = blogData.coverimg;
    existingBlog.content = blogData.content;

    await existingBlog.save();
  } else {
    const newBlog = new Blog(blogData);
    await newBlog.save();
  }
}

// Main function to connect to the database and upload content
async function main() {
  await connectToDatabase(); // Ensure MongoDB is connected
  await uploadMarkdownContent(); // Start the upload process
  mongoose.connection.close(); // Close the connection after the process
}

// Execute the main function
main();
