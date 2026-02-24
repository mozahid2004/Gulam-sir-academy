import "./WhyChooseUs.css";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlinePriceCheck } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { RiBuildingLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { MdMenuBook } from "react-icons/md";
import { useEffect } from "react";
import whytochoosePic from "../assets/BgImage/whytochoose.png";

const WhyChooseUs = () => {

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".why-card, .reveal-left, .reveal-top"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section">
      <div className="why-wrapper">

        {/* IMAGE */}
        <div className="why-left reveal-left">
          <img src={whytochoosePic} alt="Why Choose Us" className="why-img" />
        </div>

        {/* CONTENT */}
        <div className="why-right">

          <p className="why-small reveal-top">WHY CHOOSE US</p>

          <h2 className="why-title reveal-top delay1">
            Reasons to Join Our Coaching
          </h2>

          <p className="why-desc reveal-top delay2">
            We provide a disciplined learning environment, expert guidance, and
            smart strategies to help students achieve their academic goals with confidence.
          </p>

          <div className="why-grid">

            <div className="why-card">
              <div className="why-icon"><MdMenuBook/></div>
              <div className="why-text">
                <h4>Smart Teaching Method</h4>
                <p>Concept-based learning with easy explanation and practice.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon"><RiBuildingLine/></div>
              <div className="why-text">
                <h4>Trusted Coaching</h4>
                <p>Hundreds of students guided with consistent results.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon"><HiOutlineUserGroup/></div>
              <div className="why-text">
                <h4>Digital Learning</h4>
                <p>Better attention, doubt solving, and personal support.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon active"><BsBook/></div>
              <div className="why-text">
                <h4>Regular Test Series</h4>
                <p>Weekly tests + performance analysis to improve faster.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon"><MdOutlinePriceCheck/></div>
              <div className="why-text">
                <h4>Affordable Fees</h4>
                <p>Quality education at a reasonable price for every student.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon"><FiPhoneCall/></div>
              <div className="why-text">
                <h4>24/7 Guidance</h4>
                <p>Support for doubts, study planning, and exam preparation.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
