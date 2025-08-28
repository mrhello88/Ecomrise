import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./views/Landing/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
