import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: String,
  author: {
    type: String,
    required: true,
  },
  date: Date,
  sections: [
    {
      heading: String,
      content: String,
      subsections: [
        {
          subheading: String,
          content: String,
        },
      ],
    },
  ],
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
