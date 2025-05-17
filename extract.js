import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
import Blog from "./models/blog.js"; // Import the Blog model
import { marked } from "marked"; // Optional, use to render markdown if needed

// Fetch blogs from the database
async function fetchAndConvertBlogs() {
  try {
    const blogs = await Blog.find();

    // Loop over each blog
    blogs.forEach((blog) => {
      const markdownContent = convertBlogToMarkdown(blog);

      // Save markdown content to ./content/extract folder
      saveToMarkdownFile(blog.title, markdownContent);
    });

    console.log("Blogs converted to markdown successfully!");
  } catch (err) {
    console.error("Error fetching blogs:", err);
  }
}

// Convert blog to markdown
function convertBlogToMarkdown(blog) {
  const { title, image, description, sections } = blog;
  let markdown = `# ${title}\n\n`;

  if (image) {
    markdown += `![Cover Image](${image})\n\n`;
  }

  markdown += `**Description:**\n${description}\n\n`;

  // Convert sections
  sections.forEach((section) => {
    markdown += `## ${section.heading}\n\n`;
    markdown += `${section.content}\n\n`;

    section.subsections.forEach((subsection) => {
      markdown += `### ${subsection.subheading}\n\n`;
      markdown += `${subsection.content}\n\n`;
    });
  });

  return markdown;
}

// Save markdown file to disk
function saveToMarkdownFile(title, content) {
  const fileName = title.replace(/\s+/g, "_").toLowerCase() + ".md"; // Convert title to file name
  const sanitizedFileName =
    title
      .replace(/[\/\\?%*:|"<>]/g, "")
      .replace(/\s+/g, "_")
      .toLowerCase() + ".md"; // Sanitize title to remove invalid characters
  const filePath = path.join(
    __dirname,
    "content",
    "extract",
    sanitizedFileName
  );

  fs.writeFileSync(filePath, content, "utf8");

  console.log(`Saved ${fileName} to ${filePath}`);
}

// Wrap the MongoDB connection and blog fetching in an async function
async function main() {
  try {
    // Wait for MongoDB to connect
    await mongoose.connect(
      "mongodb+srv://davtekdon:AUnzhsuBMMrn0yV1@boundless.szd1u.mongodb.net/boundless",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");

    // Call the function to fetch and convert blogs
    await fetchAndConvertBlogs();
  } catch (err) {
    console.error("Error during initialization:", err);
  } finally {
    // Close the MongoDB connection after the operation
    mongoose.connection.close();
  }
}

// Execute the main function
main();
