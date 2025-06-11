import { useState, useEffect } from "react";
import { FaHome, FaUser, FaFileInvoice, FaPhoneAlt } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { MdPhotoAlbum, MdDarkMode, MdClose, MdLightMode } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import "./Header.css";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply theme to body element
  useEffect(() => {
    document.body.className = isDark ? "dark-theme" : "light-theme";
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="" className="nav__logo">
          Arihant
        </a>

        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#" className="nav__link ">
                <FaHome className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <FaUser className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <FaFileInvoice className="nav__icon" />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <RiCustomerServiceFill className="nav__icon" />
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <MdPhotoAlbum className="nav__icon" />
                Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <FaPhoneAlt className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <div
            className="nav__close"
            id="nav-close"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <MdClose className="nav__icon" /> : <></>}
          </div>
        </div>
        <div className="nav__btns">
          {/* <!-- change theme btn --> */}
          <div onClick={toggleTheme}>
            {isDark ? (
              <MdLightMode className="change--theme" />
            ) : (
              <MdDarkMode className="change--theme" />
            )}
          </div>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <></> : <TiThMenu className="nav__icon" />}
          </div>
        </div>
      </nav>
    </header>
  );
}
