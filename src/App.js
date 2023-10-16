import { Route, Routes, useLocation, Navigate } from "react-router-dom";
//pages
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/404/NotFound";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Influencer from "./Pages/Influencer/Influencer";
import Services from "./Pages/Services/Services";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/influencer" element={<Influencer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
