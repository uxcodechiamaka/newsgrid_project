import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Achive from "./achive";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic route for news details */}
        <Route path="/achive/:uuid" element={<Achive />} />
      </Routes>
    </Router>
  );
}
