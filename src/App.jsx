import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

      import Home from "./Home";
      import Achive from "./achive";

      export default function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/achive" element={<Achive  />} />
          </Routes>
        </Router>
);
}
