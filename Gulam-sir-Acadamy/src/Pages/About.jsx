import "./About.css";
import { useEffect } from "react";
import classroom from "../assets/AcademyGallery/whatsapp9.jpg";
import founder from "../assets/founder.png";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import FacultyTeam from "../components/FacultyTeam.jsx";

const About = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <main className="about-wrap">

      {/* HERO */}
      <section className="about-hero-modern">
        <div className="hero-overlay reveal">
          <h1>Gulam Sir Academy</h1>
          <p>From Knowledge to Wisdom</p>
        </div>
      </section>


      {/* WHO WE ARE */}
      <section className="about-split reveal">

        <div className="about-left reveal">
          <span className="tag">ABOUT US</span>
          <h2>Shaping Minds, Building Discipline</h2>
          <p>
            Gulam Sir Academy focuses on fundamentals, clarity, and confidence.
            We prepare students not only for exams but for real life challenges.
          </p>
          <p>
            Small batches, focused mentoring, and disciplined routines
            make learning effective and result-oriented.
          </p>
        </div>

        <div className="about-right reveal">
          <img src={classroom} alt="Classroom" />
        </div>

      </section>


      {/* FOUNDER */}
      <section className="founder-modern reveal">

        <div className="founder-img reveal">
          <img src={founder} alt="Founder" />
        </div>

        <div className="founder-content reveal">
          <span className="tag">FOUNDER</span>
          <h2>Er. Gulam Husain Ansari</h2>
          <p className="quote">
            “Education is not about marks alone, it is about mindset,
            character, and direction.”
          </p>
          <p>
            Every student has potential — with the right mentor,
            environment, and discipline, excellence is inevitable.
          </p>
        </div>

      </section>


      {/* TEAM */}
      <div className="reveal">
        <FacultyTeam/>
      </div>


      {/* WHY CHOOSE US */}
      <div className="reveal">
        <WhyChooseUs/>
      </div>

    </main>
  );
};

export default About;
