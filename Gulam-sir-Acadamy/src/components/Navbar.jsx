import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiInfo,
  FiBookOpen,
  FiGrid,
  FiPhone,
  FiX,
  FiMenu,
  FiMessageCircle
} from "react-icons/fi";
import "./Navbar.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-container">

          {/* LOGO */}
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          {/* DESKTOP MENU */}
          <nav className="nav-menu desktop">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/facilities">Facilities</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            <a href="tel:+8766040891" className="counselor-cta">
              <FiPhone />
              <div className="destopinnernummber">
                <p>Talk to Us</p>
                <strong>8766-040-891</strong>
              </div>
            </a>
          </nav>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </div>

        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`menu-overlay ${open ? "show" : ""}`}
        onClick={closeMenu}
      />

      {/* MOBILE MENU */}
      <aside className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="mobile-header">
          <span>Menu</span>
          <FiX onClick={closeMenu} />
        </div>

        <NavLink to="/" onClick={closeMenu}>
          <FiHome /> Home
        </NavLink>

        <NavLink to="/courses" onClick={closeMenu}>
          <FiBookOpen /> Courses
        </NavLink>

        <NavLink to="/facilities" onClick={closeMenu}>
          <FiGrid /> Facilities
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          <FiPhone /> Contact
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          <FiInfo /> About
        </NavLink>

        {/* MOBILE CTA */}
        <a href="tel:+8766040891" className="mobile-counselor">
          <FiMessageCircle />
          <div>
          <FiPhone id="mobContact" /><strong>Talk with Expert</strong>
            <p>+91 87660 40891</p>
          </div>
        </a>
      </aside>
    </>
  );
};

export default Navbar;
