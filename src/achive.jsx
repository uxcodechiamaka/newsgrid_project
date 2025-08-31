// src\achive.jsx

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Achive() {
  const { uuid } = useParams(); 
  const [article, setArticle] = useState(null);

  function formatDateTime(isoString) {
    try{
      const date = new Date(isoString);

      // Format the date (e.g., August 31, 2025)
      const optionsDate = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", optionsDate);

      // Format the time in 12-hour format with AM/PM
      const optionsTime = { hour: "numeric", minute: "2-digit", hour12: true };
      const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

      return `${formattedDate} ${formattedTime}`;
    }catch(error){
      console.error(error)
      return(isoString)
    }
    
  }

  async function fetchArticle() {
    try {
      const response = await axios.get(
        `https://api.thenewsapi.com/v1/news/uuid/${uuid}?api_token=ZY0cf0lvsItot5t3zvBdqON2zrgIQQ0nrB4nEnFk`
      );
      setArticle(response.data); // API returns article details
      console.log(article)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchArticle();
  }, [uuid]);
  return(
    <div>
      <Header  />
      <Navbar  />
      {!article ? (
        <p className="text-center mt-10">Loading article...</p>
      ) : (
        <News
          categories={article.categories ? article.categories[0] : "Uncategorized"}
          title={article.title}
          source={article.source}
          published_at={formatDateTime(article.published_at)}
          image_url={article.image_url}
          fullArticleUrl={article.url}
          description={article.description}
        />
      )}

      
    </div>
  )
}