// src/Home.jsx
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LatestNews from "./components/LatestNews";
import TopNews from "./components/TopNews";
import Main from "./components/Main";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [newsData, setNewsData] = useState([]);

  const API_KEY = 'ZY0cf0lvsItot5t3zvBdqON2zrgIQQ0nrB4nEnFk'
  const API_KEY_2 = 'af0DLnLJrDjErkPxB5b4FGS11yOI8SA0aAC9jqGV'

  async function fetchNews() {
    document.body.style.cursor = "wait";
    try {
      const response = await axios.get(
        `https://api.thenewsapi.com/v1/news/all?api_token=${API_KEY_2}&language=en&limit=3`
      );

      setNewsData(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      document.body.style.cursor = "default";
    }
  }

  useEffect(() => {
    (async () => {
      await fetchNews();
    })();
  }, []);


  return (
    <div className="max-w-screen flex flex-col min-h-screen">
      {/* Header + Navbar */}
      <Header />
      <Navbar />

      {/* Main Layout */}
      <div
        className="
          flex flex-col md:flex-row 
          gap-6 md:gap-8 
          justify-between px-4 md:px-8 lg:px-12
        "
      >
        {/* Left: Latest News */}
        <div className="w-full hidden md:block md:w-1/4">
          <LatestNews />
        </div>

        {/* Center: Main news feed */}
        <div className="w-full md:w-2/4 flex flex-col gap-6">
          {newsData.map((eachNews, index) => (
            <Link to={`/achive/${eachNews.uuid}`} key={index}>
              <Main
                newsImage={eachNews.image_url}
                newTitle={eachNews.title}
                newsDescription={eachNews.description}
              />
            </Link>
          ))}
        </div>

        {/* Left: Latest News for mobile view */}
        <div className="w-full  md:hidden md:w-1/4">
          <LatestNews />
        </div>

        {/* Right: Top News */}
        <div className="w-full md:w-1/4 mt-5 md:mt-0">
          <TopNews />
        </div>
      </div>
    </div>
  );
}
