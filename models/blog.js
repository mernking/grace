import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  coverimg: {
    type: String,
    default: "https://placehold.co/600x400/000000/FFF?text=No\nMedia",
  },
  content: { type: String, required: true },
});

// Create the Blog model
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
