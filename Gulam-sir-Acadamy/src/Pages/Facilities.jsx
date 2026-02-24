import "./Facilities.css";
import { useEffect } from "react";
import {
  FaBuilding,
  FaLeaf,
  FaHome,
  FaFileSignature,
  FaHandshake,
  FaMoneyBillWave
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi"

const facilitiesData = [
  {
    icon: <FaBuilding />,
    title: "Modern Classrooms in Amravati",
    text: "Well-equipped classrooms with proper seating, lighting, and distraction-free environment designed for focused academic learning."
  },
  {
    icon: <FaLeaf />,
    title: "Peaceful Study Environment",
    text: "Calm and disciplined atmosphere that helps students concentrate better and improve academic performance."
  },
  {
    icon: <FaHome />,
    title: "Comfortable Infrastructure",
    text: "Spacious study areas, ventilation, and clean surroundings ensuring students learn comfortably for long hours."
  },
  {
    icon: <FaFileSignature />,
    title: "Quick Admission Process",
    text: "Simple and hassle-free admission system with instant guidance for parents and students."
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Coaching Institute",
    text: "Recognized and trusted by parents and students across Amravati for consistent results and disciplined teaching."
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Coaching Fees",
    text: "Quality education at reasonable fees with flexible payment options suitable for every family."
  }
];

const Facilities = () => {

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
    <main className="facilities-page">

      {/* HERO */}
      <section className="facilities-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content reveal">
          <h1>Our Facilities</h1>
          <p>Designed for Focus, Comfort & Consistent Growth</p>
        </div>
      </section>


      {/* GRID */}
      <section className="facilities-grid">

        {facilitiesData.map((item, index) => (
          <div className="facility-card reveal" key={index}>
            
            <div className="card-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>

            <div className="card-bg-icon">
              {item.icon}
            </div>

          </div>
        ))}

      </section>


      {/* CTA */}
      <section className="facilities-cta reveal">
        <h2>A Complete Learning Ecosystem</h2>
        <p>Admissions Open</p>
        <a href="tel:8766040891" className="cta-btn">
        <FiPhone/> 8766 040 891
        </a>
      </section>

    </main>
  );
};

export default Facilities;
