import { useEffect, useState } from "react";
import "./FloatingContact.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingContact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`floating-contact ${show ? "show" : ""}`}>
      <a
        href="tel:+918766040891"
        className="contact-btn call"
        aria-label="Call"
      >
        <FaPhone />

      </a>

      <a
        href="https://wa.me/8766040891"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingContact;
