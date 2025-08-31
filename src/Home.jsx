import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LatestNews from "./components/LatestNews";
import TopNews from "./components/TopNews";
import Main from "./components/Main";



export default function Home() {
  return (
    <div className="flex flex-col">
        <Header  />
        <Navbar  />
        <div className="flex flex-row justify-between">
            <LatestNews  />
            <div className="flex-wrap">
              <a href="/achive">
                <Main  />
              </a>
            </div>
            <TopNews  />
        </div>
    </div>

    
      
      
    
  );
}
