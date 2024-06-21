import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/accommodations/:id" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}