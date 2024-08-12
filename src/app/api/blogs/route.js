import connectToDatabase from "../../../../lib/mongoose";
import Blog from "../../../../models/blog";

export async function GET(req, res) {
  await connectToDatabase();

  try {
    const blog = await Blog.find({});
    if (!blog) {
      return Response.json({ error: "Blog not found" });
    }
    return Response.json({ blog: blog });
  } catch (error) {
    return Response.json({ error: error });
  }
}

export async function POST(req, res) {
  await connectToDatabase();
  const { title, image, author, date, sections, description } =
    await req.json();

  try {
    if (!title || !author) {
      return Response.json({ error: "Missing required fields" });
    }
    if (await Blog.findOne({ title: title })) {
      return Response.json({ error: "Blog already exists" });
    }
    const newBlog = new Blog({
      title,
      description,
      image,
      author,
      date,
      sections,
    });
    await newBlog.save();
    return Response.json({ message: "Blog created successfully" });
  } catch (error) {
    return Response.json({ error: "Failed to create blog", message: error });
  }
}

export async function PUT(req, res) {
  await connectToDatabase();
  const { _id, title, image, author, date, sections, description } = await req.json();
  const id = _id;
  async;
  try {
    if (!id) {
      return Response.json({ error: "Missing required fields" });
    }
    if (!(await Blog.findById(id))) {
      return Response.json({ error: "Blog not found" });
    }
    await Blog.findByIdAndUpdate(id, {
      title,
      description,
      image,
      author,
      date,
      sections,
    });
    return Response.json({ message: "Blog updated successfully" });
  } catch (error) {
    return Response.json({ error: "Failed to update blog", message: error });
  }
}

export async function DELETE(req, res) {
  await connectToDatabase();
  const { id } = await req.json();
  try {
    if (!id) {
      return Response.json({ error: "Missing required fields" });
    }

    if (!(await Blog.findById(id))) {
      return Response.json({ error: "Blog not found" });
    }
    await Blog.findByIdAndDelete(id);
    return Response.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return Response.json({ error: "Failed to delete blog", message: error });
  }
}
