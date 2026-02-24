import React, { useEffect } from "react";
import "./CareerPath.css";
import professionalImg from "../assets/BgImage/professionalPeople.png";

const CareerPath = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal, .reveal-img");

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
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="career-section">
      <div className="career-container">

        {/* IMAGE */}
        <div className="career-image-wrapper reveal">
          <img
            src={professionalImg}
            alt="Multiple Professionals"
            className="career-image reveal-img"
          />
        </div>

        {/* TEXT */}
        <div className="career-content reveal">
          <h2 className="career-title">
            We Shape The Foundation Of <span>Every Career Path</span>
          </h2>

          <p className="career-description">
            From doctors to engineers, civil servants to business leaders —
            our coaching builds strong fundamentals that prepare you for every
            professional journey. We don't just teach subjects, we shape your future.
          </p>

          <div className="career-points">
            <div>✔ Expert Mentorship</div>
            <div>✔ Concept Clarity</div>
            <div>✔ Career-Focused Training</div>
            <div>✔ Proven Success Track</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CareerPath;
