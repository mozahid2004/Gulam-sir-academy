import "./Courses.css";
import { useEffect } from "react";
import {
  FaSchool,
  FaBookOpen,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaPhone
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi"

const Courses = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active"); // 👈 ye line add karo
          }
        });
      },
      { threshold: 0.15 }
    );
  
    elements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <main className="courses-page">

      {/* HERO */}
      <section className="courses-hero">
        <div className="hero-inner reveal">
          <h1>Our Courses</h1>
          <p>Strong Foundation • Competitive Excellence • Holistic Growth</p>
        </div>
      </section>


      {/* COURSES GRID */}
      <section className="courses-grid">

        <div className="course-card reveal">
          <div className="course-icon"><FaSchool /></div>
          <h2>Foundation 8th,9th,10th</h2>
          <p>Concept-based learning to build strong academic foundations.</p>
          <ul>
            <li>NCERT focused teaching</li>
            <li>Regular tests & feedback</li>
            <li>Doubt clearing sessions</li>
            <li>Discipline & time management</li>
          </ul>
          <a href="tel:+919876543210" className="explore-btn">
            <FaPhone className="phoneIcon"/> Call Now
          </a>
        </div>


        <div className="course-card reveal">
          <div className="course-icon"><FaBookOpen /></div>
          <h2>11th & 12th (Science)</h2>
          <p>Board preparation with competitive exam readiness.</p>
          <ul>
            <li>PCM / PCB / Commerce</li>
            <li>Board + entrance alignment</li>
            <li>Personal mentoring</li>
            <li>Performance tracking</li>
          </ul>
          <a href="tel:+919876543210" className="explore-btn">
            <FaPhone className="phoneIcon"/> Call Now
          </a>
        </div>


        <div className="course-card reveal">
          <div className="course-icon"><FaUserGraduate /></div>
          <h2>MH-CET | JEE | NEET</h2>
          <p>Strategic preparation for competitive entrance exams.</p>
          <ul>
            <li>Deep concept clarity</li>
            <li>Mock tests & analysis</li>
            <li>Exam strategy</li>
            <li>Progress monitoring</li>
          </ul>
          <a href="tel:+919876543210" className="explore-btn">
            <FaPhone className="phoneIcon"/>Call Now
          </a>
        </div>


        <div className="course-card reveal">
          <div className="course-icon"><FaChalkboardTeacher /></div>
          <h2>Spoken English</h2>
          <p>Confidence building through communication skills.</p>
          <ul>
            <li>Spoken English</li>
            <li>Public speaking</li>
            <li>Interview skills</li>
            <li>Personality grooming</li>
          </ul>
          <a href="tel:+919876543210" className="explore-btn">
            <FaPhone className="phoneIcon"/>Call Now
          </a>
        </div>

      </section>


      {/* STUDY RESOURCES */}
      <section className="study-resources reveal">
        <h2>Study Resources</h2>
        <p className="subtext">
          Below are official and trusted resources from NCERT and State Boards.
        </p>

        <div className="study-resources-container">

          <div className="resource-block reveal">
            <h3>CBSE Board (NCERT Books)</h3>
            <ul>
              <li>
                <span>Class 5 – 10 (All Subjects)</span>
                <a href="https://epathshala.nic.in" target="_blank" rel="noopener noreferrer">View on ePathshala</a>
              </li>
              <li>
                <span>NCERT Mathematics</span>
                <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer">Open Books</a>
              </li>
              <li>
                <span>NCERT Science</span>
                <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer">Open Books</a>
              </li>
              <li>
                <span>NCERT English & Hindi</span>
                <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer">Open Books</a>
              </li>
              <li>
                <span>NCERT Social Science</span>
                <a href="https://ncert.nic.in/textbook.php" target="_blank" rel="noopener noreferrer">Open Books</a>
              </li>
            </ul>
          </div>


          <div className="resource-block reveal">
            <h3>State Board (Maharashtra – eBalbharati)</h3>
            <ul>
              <li>
                <span>Class 5 – 10 (All Subjects)</span>
                <a href="https://books.ebalbharati.in/ebook.aspx" target="_blank" rel="noopener noreferrer">Open eBalbharati</a>
              </li>
              <li>
                <span>Medium: Marathi / English / Hindi</span>
                <a href="https://www.ebalbharati.in" target="_blank" rel="noopener noreferrer">Official Website</a>
              </li>
            </ul>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="courses-cta reveal">
        <h2>Your Journey to Success Starts Here</h2>
        <p>Admissions Open</p>
        <a href="tel:8766040891" className="fbtn">
          <FiPhone/> 8766 040 891
          </a>
      </section>

    </main>
  );
};

export default Courses;
