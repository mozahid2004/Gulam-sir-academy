import "./Footer.css";
import { RiFlag2Line, RiEyeLine } from "react-icons/ri";
import {
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaLinkedin,
  FaFileUpload,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="gsa-footer">
      <div className="footer-wrapper">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>Gulam Sir Academy</h2>
          <p className="tagline">Knowledge to Wisdom</p>
          <p className="brand-desc">
            The foundation of your dream is carefully shaped
            with discipline, guidance, and excellence.
          </p>
        </div>

        {/* COURSES */}
        <div className="footer-col">
          <h4>Programs</h4>
          <ul>
            <li><Link to="/courses">Foundation 8th,9th,10th</Link></li>
            <li><Link to="/courses">11th & 12th (Science)</Link></li>
            <li><Link to="/courses">MH-CET · JEE · NEET</Link></li>
            <li><Link to="/courses">Spoken English</Link></li>
            <li><Link to="/courses">Coding</Link></li>
          </ul>
        </div>

        {/* FACILITIES */}
        <div className="footer-col">
          <h4>Facilities</h4>
          <ul>
            <li>Scholarship Tests</li>
            <li>Library & Wi-Fi</li>
            <li>Hostel & Mess</li>
            <li>Computer & Coding Lab</li>

          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col contact">
          <h4>Contact</h4>
          <p>N.H. 06, Bus Stand</p>
          <p>Nandgaon Peth, Amravati – 444901</p>
          <p>
            <a href="tel:+918766040891" className="footer-link">
              +91 8766 040 891 
            </a>
          </p>
          <p>
            <a href="tel:+917057165338" className="footer-link">
              +91 7057 165 338
            </a>
          </p>
          <p>
            <a
              href="https://www.mtecs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              www.mtecs.in
            </a>
          </p>
        </div>

        {/* CAREER (UPDATED WITH LINKS + ICONS) */}
        <div className="footer-col contact">
          <h4>Career</h4>

          <p className="career-text">
            Want to join as a Teacher / Staff? Send your Resume now:
          </p>

          <div className="career-links">
            {/* EMAIL RESUME */}
            <a
              className="career-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mtecs101@gmail.com&su=Resume%20Submission"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope style={{ pointerEvents: "none" }} /> Open in Gmail
            </a>



            {/* WHATSAPP */}
            <a
              className="career-link"
              href="https://wa.me/918766040891?text=Hello%20Gulam%20Sir%20Academy%2C%20I%20want%20to%20apply%20for%20a%20job.%20Please%20guide%20me%20to%20send%20my%20resume."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            {/* CALL */}
            <a className="career-link" href="tel:+918766040891">
              <FaPhoneAlt /> Call HR
            </a>

            {/* LINKEDIN (Optional) */}
            <a
              className="career-link"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>

          </div>
        </div>

      </div>

      {/* NEW ROW : MISSION & VISION */}
      <div className="footer-mv">
        <p>
          <RiFlag2Line />
          <strong> Mission:</strong> To build strong academic foundations through
          discipline, clarity of concepts, and dedicated guidance.
        </p>

        <p>
          <RiEyeLine />
          <strong> Vision:</strong> To nurture confident, responsible, and
          future-ready students who succeed in academics and life.
        </p>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Gulam Sir Academy · All Rights Reserved ·
        Design by Mozahid Izhar
      </div>
    </footer>
  );
};

export default Footer;
