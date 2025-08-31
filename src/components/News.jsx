import Header from "./Header";
import Navbar from "./Navbar";
import newsphoto from "../assets/newsphoto.png"; 

export default function News({categories, title, source, published_at, image_url, fullArticleUrl, description}) {
  return (
    <div className="px-4 pb-7">
      <button className="bg-[#0F66B6] text-white px-8 py-1.5 shadow text-lg mb-7">
        {categories}
      </button>

      <h1 className="text-3xl font-medium">
        {title}
      </h1>
      <h1 className="text-3xl font-medium">
        — {source}
      </h1>

      <p className="text-[20px] py-4">{published_at}</p>

      <img
        src={image_url}
        alt="News"
        className="w-full max-w-4xl h-auto object-cover rounded-lg mb-6"
      />

      <p className="text-justify py-4 leading-relaxed text-[15px]">{description}</p>

      <a
        href={fullArticleUrl}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 underline mt-4 inline-block"
      >
        Read full article
      </a>

      {/* Back and Next buttons */}
      <div className="flex justify-between items-center mt-8">
        <a href="/" className="bg-[#0F66b6] text-white px-6 py-2 rounded-md">
          Back
        </a>
      </div>
    </div>
  );
}
