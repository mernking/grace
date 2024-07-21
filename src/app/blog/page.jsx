import axios from "axios";

export default function blog() {
    axios.get("/api/blogs")
    .then((res) => {
        console.log(res.data)
    })

  return (
    <div>
      <h1>{blog.title}</h1>
      <h2>
        By {blog.author} on {new Date(blog.date).toLocaleDateString()}
      </h2>
      {blog.sections.map((section, index) => (
        <div key={index}>
          <h3>{section.heading}</h3>
          <p>{section.content}</p>
          {section.subsections.map((subsection, subIndex) => (
            <div key={subIndex}>
              <h4>{subsection.subheading}</h4>
              <p>{subsection.content}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
