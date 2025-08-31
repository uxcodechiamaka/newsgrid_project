// src\Home.jsx

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LatestNews from "./components/LatestNews";
import TopNews from "./components/TopNews";
import Main from "./components/Main";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




export default function Home() {

  const [newsData, setNewsData] = useState([])
  async function fetchNews(){
    document.body.style.cursor = 'wait'
    try{
      const response = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=ZY0cf0lvsItot5t3zvBdqON2zrgIQQ0nrB4nEnFk&language=en&limit=3')
      setNewsData(response.data.data)
    }catch(error){
      console.error(error)
    }finally{
      document.body.style.cursor = 'default'
    }
  }

  useEffect(()=>{
    fetchNews()
  }, [])
  return (
    <div className="flex flex-col">
        <Header  />
        <Navbar  />
        <div className="flex flex-row justify-between">
            <LatestNews  />
            <div className="flex-wrap">
              {
                newsData.map((eachNews, index)=>(
                  <Link to={`/achive/${eachNews.uuid}`} key={index}>
                    <Main newsImage={eachNews.image_url} newTitle={eachNews.title} newsDescription={eachNews.description} />
                  </Link>
                ))
              }
              
            </div>
            <TopNews  />
        </div>
    </div>

    
      
      
    
  );
}
