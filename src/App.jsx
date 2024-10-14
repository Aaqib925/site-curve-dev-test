import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <MainSection />
            </>
          }
        />
        <Route path="/feature1" element={<Content text="Feature 1" />} />
        <Route path="/feature2" element={<Content text="Feature 2" />} />
        <Route path="/pricing" element={<Content text="Pricing" />} />
        <Route path="/about" element={<Content text="About Us" />} />
        <Route path="/careers" element={<Content text="Careers" />} />
        <Route path="/blog" element={<Content text="Blog" />} />
        <Route path="/support" element={<Content text="Support" />} />
        <Route path="/enterprise" element={<Content text="Enterprise" />} />
        <Route path="/login" element={<Content text="Login" />} />
      </Routes>
    </Router>
  );
}

export default App;
