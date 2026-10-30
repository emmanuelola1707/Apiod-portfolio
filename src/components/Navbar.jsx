
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <a
        className="navbar__brand"
        href="#home"
        aria-label="APIOD Visuals home"
        onClick={closeMenu}
      >
        <img src="/images/apiod-logo.png" alt="APIOD Visuals" />
      </a>

      <nav
          id="main-navigation"
          className={`navbar__links ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <a
        className="navbar__cta"
        href="#contact"
        onClick={closeMenu}
      >
        Let's Talk <span aria-hidden="true">↗</span>
      </a>

      <button
        type="button"
        className="navbar__toggle"
        onClick={() => setMenuOpen((previous) => !previous)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Navbar;
