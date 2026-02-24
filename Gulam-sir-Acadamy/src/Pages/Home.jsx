import "./Home.css";
import founderImg from "../assets/founder.png"; // transparent PNG
import { useEffect, useState } from "react";
import { galleryImages } from "./ImportImg/GalleryImg.js";
import { FiPhone } from "react-icons/fi"
import { motion } from "framer-motion";
import CareerPath from "../components/CareerPath.jsx";

const Home = () => {



  const fullText = "Gulam Sir Academy";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && typedText.length < fullText.length) {
      timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 120);
    }
    else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length - 1));
      }, 80);
    }
    else if (!isDeleting && typedText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    }
    else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);


  const elements = document.querySelectorAll(".reveal-left, .reveal-right");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => {
    el.classList.add("animate");
    observer.observe(el);
  });


  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      exit={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* tumhara existing Home content same रहेगा */}
      <main className="home">

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <span className="hero-badge">Admissions Open 2026 – 27</span>

            <div className="hero-title">
              <h1 className="academy-name typing">
                <span className="typing-text">{typedText}</span>
              </h1>

              <span className="tagline">Knowledge to Wisdom</span>
            </div>



            <p>
              A Creative and Futuristic coaching institute offering CBSE, ICSE, State Board &  Entarance/Competitive
              Exam guidance along with Future Ready Skills.
            </p>

            <div className="hero-buttons">
              <a href="tel:+8766040891"
                className="btn primary call-btn">

                <span> Connect Us</span>
              </a>

              <a href="#courses" className="btn outline">Our Courses</a>
            </div>

            <div className="hero-stats">
              <div><h3>5+</h3><p>Years Experience</p></div>
              <div><h3>1200+</h3><p>Students Guided</p></div>

            </div>
          </div>

          {/* FOUNDER */}
          <div className="hero-founder">
            <div className="founder-blob"></div>
            <img src={founderImg} alt="Founder Gulam Sir" />
            <div className="founder-tag">
              <h4>Er. Gulam Husain Ansari</h4>
              <ul className="qualifications">
                <li>Board Topper</li>
                <li>IIT Kanpur Certificate</li>
                <li>Letter from Former PM Dr. Manmohan Singh</li>
                <li>
                  Founder of IT Startup Company
                  (<a href="https://www.mtecs.in" target="_blank">www.mtecs.in</a>)
                </li>
              </ul>

            </div>
          </div>
        </section>
        <section className="course-strip">
          <div className="strip-track">
            {[
              "Foundation : 8th,9th,10th",
              "11th–12th |JEE | NEET | MH-CET",
              "Spoken English",
              "Foundation : MPSC | UPSC",
              "Future Ready Skills",

            ].map((item, i) => (
              <div className="strip-item" key={i}>{item}</div>
            ))}

            {/* duplicate for infinite loop */}
            {[
              "Foundation : 8th,9th,10th",
              "11th–12th |JEE | NEET | MH-CET",
              "Spoken English",
              "Foundation : MPSC | UPSC",
              "Future Ready Skills",

            ].map((item, i) => (
              <div className="strip-item" key={`dup-${i}`}>{item}</div>
            ))}
          </div>
        </section>

        <CareerPath />

        {/* COURSES – MODERN LIST STYLE */}
        <section className="dual-section">

          {/* PROGRAMS */}
          <section className="programs reveal-left" id="courses">
            <h2>
              Academic <span>Programs</span>
              <div className="line"></div>
            </h2>

            <div className="program-flow">
              {[
                ["01", "Foundation : 8th,9th,10th (CBSE & State Board)", "Strong fundamentals, regular evaluation & disciplined learning."],
                ["02", "11th & 12th | MH-CET | JEE | NEET", "Board-focused learning blended with competitive mindset."],
                ["03", "Foundation : NCERT (MPSC/UPSC)", "Smart strategy, expert guidance & deep concept mastery."],
                ["04", "Spoken English", "Communication, confidence & leadership for real-world success."],
                ["05", "Future Ready Skills", "AI, Coding, Robotics, Industrial & Business Visits."]
              ].map((item, i) => (
                <div className="program-item reveal-left" key={i}>
                  <span className="program-no">{item[0]}</span>
                  <div className="program-text">
                    <h3>{item[1]}</h3>
                    <p>{item[2]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* VALUES */}
          <section className="values reveal-right">
            <h2>
              What Makes Us <span>Different ??</span>
              <div className="line"></div>
            </h2>

            <div className="value-lines">
              {[
                "Scholarship tests & financial support for deserving students",
                "Library, Wi-Fi & modern computer lab facilities",
                "Hostel, room & hygienic mess assistance",
                "Coding, computer practice & digital skills",
                "Spoken English",
                "Safe campus with easy transport connectivity"
              ].map((text, i) => (
                <p className="reveal-right" key={i}>{text}</p>
              ))}
            </div>
          </section>

        </section>


        {/* ==================================== */}
        <section className="gallery-section">
          <h2 className="gallery-title">
            Life at Gulam Sir Academy
            <div className="line"></div>
          </h2>

          <div className="gallery-wrapper">
            {galleryImages.map((group, index) => (
              <div
                key={index}
                className={`strip ${index % 2 === 0 ? "up" : "down"}`}
              >
                {[...group, ...group].map((img, i) => (
                  <img key={i} src={img} alt="academy life" />
                ))}
              </div>
            ))}
          </div>
        </section>



        {/* =================================== */}

        {/* <Facilities/> */}


        {/* CTA */}
        <section className="cta" id="admission">
          <h2>The Foundation of Your Dream Starts Here</h2>
          <p>Visit us at Nandgaon Peth, Amravati</p>
          <a href="tel:8766040891" className="fbtn">
            <FiPhone /> 8766 040 891
          </a>
        </section>

      </main>

    </motion.div>
  );
};

export default Home;
