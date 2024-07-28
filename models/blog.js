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
      image: String,
      subsections: [
        {
          subheading: String,
          content: String,
          image: String,
        },
      ],
    },
  ],
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
