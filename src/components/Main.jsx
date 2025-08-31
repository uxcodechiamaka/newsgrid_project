


export default function Main({newsImage, newTitle, newsDescription}) {


  return (
    <div className="max-w-2xl mx-auto rounded-2xl shadow-md overflow-hidden bg-gray-100 my-6">
      {/* News Image */}
      <img
        src={newsImage}
        alt="News"
        className="w-full h-80 object-cover"
      />
      {/* News Content */}
      <div className="p-6">
        <h2 className="text-gray-900 font-semibold text-xl → 20px mb-3">{newTitle}</h2>
        <p className="text-black-600 leading-relaxed text-base → 16px (default)">{newsDescription}</p>
      </div>
    </div>
  );
}
