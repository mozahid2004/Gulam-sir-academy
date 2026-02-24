import React from "react";
import "./FacultyTeam.css";
import gulamsir from "../assets/founder.png";
import sandhyaThakur from "../assets/Faculity/SandhyaMadam.jpg";
import mozahid from "../assets/Faculity/mozahid.jpg";

const facultyData = [
  {
    id: 1,
    name: "Gulam Ansari",
    designation: "Faculty",
    experience: "5+ Years Experience",
    image: gulamsir,
  },
  {
    id: 2,
    name: "Sandhya Thakur",
    designation: "Senior Faculty",
    experience: "22+ Years Experience",
    image: sandhyaThakur,
  },
  {
    id: 3,
    name: "Mozahid Izhar",
    designation: "Mentor & Digital Head",
    experience: "Digital Operations",
    image: mozahid,
  },
];

export default function FacultyTeam() {
  return (
    <section className="faculty-section">
      <div className="faculty-header">
        <h2>Our Expert Team</h2>
        <p>Dedicated professionals guiding students towards success</p>
      </div>

      <div className="faculty-grid">
        {facultyData.map((faculty) => (
          <div className="faculty-card" key={faculty.id}>
            <div className="faculty-img-wrapper">
              <img src={faculty.image} alt={faculty.name} />
            </div>

            <div className="faculty-info">
              <h3>{faculty.name}</h3>
              <span className="designation">{faculty.designation}</span>
              <p className="experience">{faculty.experience}</p>
            </div>

            <div className="hover-border"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
