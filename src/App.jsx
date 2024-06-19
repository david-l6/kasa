import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/kasa/" element={<Home />} />
        <Route path="/kasa/accommodations/:id" element={<Accommodation />} />
        <Route path="/kasa/about" element={<About />} />
        <Route path="/kasa/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}