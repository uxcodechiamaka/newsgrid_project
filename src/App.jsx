import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LatestNews from "./components/LatestNews";
import TopNews from "./components/TopNews";
import Main from "./components/Main";


export default function App() {
  return (
    <div className="flex flex-col">
        <Header  />
        <Navbar  />
        <div className="flex flex-row justify-between">
            <LatestNews  />
            <div className="flex-wrap">
              <Main  />
            <Main  />
            </div>
            
            <TopNews  />
        </div>
        
      
    </div>

    
      
      
    
  );
}
