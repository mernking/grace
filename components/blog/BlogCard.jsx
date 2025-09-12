import Card from "../ui/Card";
import Image from "next/image";

export default function BlogCard({ post }) {
  // If post.image is missing, generate a placeholder with the title
  const fallbackImage = `https://placehold.co/800x400?text=${encodeURIComponent(
    post.title || "Boundless Blog"
  )}&font=roboto`;


  const imageSrc = post.image || fallbackImage;

  return (
    <Card>
      <div className="relative w-full h-[250px]">
        {imageSrc.includes("placehold.co") ? (
          <img
            src={imageSrc}
            alt={post.title}
            className="w-full h-[250px] object-cover rounded-t-lg"
          />
        ) : (
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            className="object-cover rounded-t-lg"
          />
        )}
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-lg mb-2 text-gray-500">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700">{post.description}</p>
      </div>
    </Card>
  );
}
