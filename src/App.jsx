import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LatestNews from "./components/LatestNews";
import TopNews from "./components/TopNews";



export default function App() {
  return (
    <div className="flex flex-col">
        <Header  />
        <Navbar  />
        <div className="flex flex-row justify-between">
            <LatestNews  />
            
            <TopNews  />
        </div>
        
      
    </div>

    
      
      
    
  );
}
