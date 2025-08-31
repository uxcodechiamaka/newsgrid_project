import newsphoto from "../assets/newsphoto.png"
import axios from "axios";
import { useState, useEffect } from "react";

export default function Main() {
  const [newsData, setNewsData] = useState("")
  async function fetchNews(){
    try{
      const response = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=ZY0cf0lvsItot5t3zvBdqON2zrgIQQ0nrB4nEnFk&language=en&limit=3')
      setNewsData(response.data.data)
    }
  }

  return (
    <div className="max-w-2xl mx-auto rounded-2xl shadow-md overflow-hidden bg-gray-100 my-6">
      {/* News Image */}
      <img
        src={newsphoto}
        alt="News"
        className="w-full h-80 object-cover"
      />

      {/* News Content */}
      <div className="p-6">
        <h2 className="text-gray-900 font-semibold text-xl → 20px mb-3">
          2027: Shield Tinubu from attacks – APC chieftain urges South leaders
        </h2>
        <p className="text-black-600 leading-relaxed text-base → 16px (default)">
          A chieftain of the All Progressives Congress (APC) in Osun State,
          Olatunbosun Oyintiloye, has urged political and traditional leaders
          in Southern Nigeria to protect President Bola Tinubu from a few elite
          individuals from the North who are hell-bent on stopping his
          reelection bid in 2027.
        </p>
      </div>
    </div>
  );
}
