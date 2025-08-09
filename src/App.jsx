import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero.jsx/Hero";
import Navbar2 from "./components/navbar/Navbar2";
import { useEffect } from "react";
import Service from "./components/Service/Service";
import BannerDetails from "./components/BannerDetails/BannerDetails";
import Banner1 from "./assets/blog1.jpg";
import Banner2 from "./assets/blog3.jpg";

// Extra Pages
const HomePage = () => (
  <>
    <Hero />
    <BannerDetails img={Banner2} />
    <Banner />
    <Blogs />
  </>
);

const ServicesPage = () => (
  <>
    <Service />
    <BannerDetails reverse={true} img={Banner1} />
  </>
);

const ContactPage = () => (
  <>
    <h1 className="text-center text-3xl font-bold mt-20">Contact Vedant Study Point</h1>
    <p className="text-center mt-4">You can reach us via WhatsApp or visit our library in Nagpur.</p>
  </>
);

const NotFound = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    <p className="mt-4">Oops! Lagta hai galat jagah aa gaye ho. 😅</p>
  </div>
);

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="dark:bg-slate-900 dark:text-white">
        {/* Navbar */}
        <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
          <Navbar2 />
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<Banner/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer stays always */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
