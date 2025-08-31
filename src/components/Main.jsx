export default function Main({ newsImage, newTitle, newsDescription }) {
  return (
    <div className="w-full md:max-w-2xl mx-auto rounded-2xl shadow-md overflow-hidden bg-gray-100 my-6">
      {/* News Image */}
      <img
        src={newsImage}
        alt="News"
        className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
      />

      {/* News Content */}
      <div className="p-4 sm:p-6">
        <h2 className="text-gray-900 font-semibold text-lg sm:text-xl md:text-2xl mb-3">
          {newTitle}
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
          {newsDescription}
        </p>
      </div>
    </div>
  );
}
