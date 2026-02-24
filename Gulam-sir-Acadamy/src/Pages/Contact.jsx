import "./Contact.css";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi"

import SubmitMessage from "../components/SubmitMessage.jsx";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("success");
  const [popupMsg, setPopupMsg] = useState("");

  /* ================= REVEAL ANIMATION ================= */
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
  /* ===================================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await emailjs.sendForm(
        "service_fsg2az7",
        "template_xhypbud",
        form,
        "ndzovF_CLBdguzSCD"
      );

      if (res.status !== 200) throw new Error("Email failed");

      const phone = "8766040891";

      const message = encodeURIComponent(
        `New Admission Inquiry

Student Name: ${formData.get("student")}
Parent Name: ${formData.get("parent")}
Mobile: ${formData.get("mobile")}
Email: ${formData.get("email") || "Not Provided"}
Course: ${formData.get("course")}

Message:
${formData.get("message") || "No Message"}`
      );

      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

      const confirmSend = window.confirm("Did you send the WhatsApp message?");

      if (confirmSend) {
        setPopupType("success");
        setPopupMsg("Submitted Successfully! We will contact you soon.");
        form.reset();
      } else {
        setPopupType("error");
        setPopupMsg("Please send the WhatsApp message to complete inquiry.");
      }

      setShowPopup(true);
    } catch (error) {
      console.log(error);
      setPopupType("error");
      setPopupMsg("Submission failed! Please try again later.");
      setShowPopup(true);
    }
  };


  return (
    <main className="contact-page">

      <SubmitMessage
        show={showPopup}
        type={popupType}
        message={popupMsg}
        onClose={() => setShowPopup(false)}
      />

      {/* HERO */}
      <section className="contact-hero reveal">
        <h1>Contact & Admission</h1>
        <p>Start your academic journey with us</p>
      </section>


      {/* CONTENT */}
      <section className="contact-wrapper">
        <div className="contact-grid">

          {/* LEFT */}
          <div className="contact-card info-card reveal">
            <h2>Reach Us</h2>

            <div className="info-item">
              <FaMapMarkerAlt />
              <p>
                Gulam Sir Academy,<br />
                N.H. 06, Bus Stand, Nandgaon Peth,<br />
                Amravati, Maharashtra – 444901
              </p>
            </div>

            <div className="info-item">
              <a href="tel:+918766040891">
                <FaPhoneAlt /> 8766040891
              </a> /
              <a href="tel:+917057165338">
                7057165338
              </a>


            </div>

            <div className="info-item">
              <a
                className="contact-link"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=gulamsir101@gmail.com&su=I%20am%20Intersted"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope style={{ pointerEvents: "none" }} /> gulamsir101@gmail.com
              </a>

            </div>

            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>

            <div className="map-box reveal">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1018.3072468103594!2d77.82192523153914!3d21.021385897045917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a303aeab8055%3A0xc5d6132e0f389f3e!2zR3VsYW0gU2lyIEFjYWRlbXkg4KSX4KWB4KSy4KS-4KSuIOCkuOCksCDgpIXgpJXgpYXgpKHgpK7gpYA!5e0!3m2!1sen!2sin!4v1768746870032!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>


          {/* RIGHT */}
          <div className="contact-card form-card reveal">
            <h2>Admission Inquiry</h2>

            <form onSubmit={handleSubmit}>
              <input name="student" placeholder="Student Name" required />
              <input name="parent" placeholder="Parent Name" required />
              <input name="mobile" placeholder="Mobile Number" required />
              <input name="email" type="email" placeholder="Email Address" />

              <select name="course" required>
                <option value="">Select Course</option>
                <option value="5th – 10th CBSE">5th – 10th CBSE / ICSE / State Board</option>
                <option value="11th – 12th Science">11th – 12th Science</option>
                <option value="11th – 12th Commerce">11th – 12th Arts / Commerce</option>
                <option value="MH-CET / JEE / NEET">MH-CET / JEE / NEET</option>
                <option value="English Speaking">English Speaking</option>
                <option value="Computer / Coding">Computer / Coding</option>
              </select>

              <textarea name="message" placeholder="Your Message"></textarea>

              <button type="submit">Submit Inquiry</button>
            </form>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="cta reveal" id="admission">
        <h2>The Foundation of Your Dream Starts Here</h2>
        <p>Visit us at Nandgaon Peth, Amravati</p>
        <a href="tel:8766040891" className="fbtn">
          <FiPhone /> 8766 040 891
        </a>
      </section>

    </main>
  );
};

export default Contact;
