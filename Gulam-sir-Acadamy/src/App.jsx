import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import AnnouncementStrip from "./components/AnnouncementStrip.jsx";
import FloatingContact from "./components/FloatingContact.jsx";

import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";

// Lazy pages
const Home = lazy(() => import("./Pages/Home.jsx"));
const About = lazy(() => import("./Pages/About"));
const Courses = lazy(() => import("./Pages/Courses.jsx"));
const Facilities = lazy(() => import("./Pages/Facilities.jsx"));
const Contact = lazy(() => import("./Pages/Contact"));

function App() {
  const location = useLocation();

  // ✅ Loader minimum time (so people notice)
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 900); // 👈 loader min time (change 900 to 1200 if you want)

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Page change pe top scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      {/* <AnnouncementStrip /> */}
      <FloatingContact />

      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          {showLoader ? (
            <Loader />
          ) : (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </AnimatePresence>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
