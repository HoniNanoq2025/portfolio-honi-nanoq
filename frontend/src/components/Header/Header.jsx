import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Logo from "../../assets/img/HoniNanoqLogo05-PR-Viking.png";
import styles from "./Header.module.css";

export default function Header() {
  // useState hook til at styre om mobilmenuen er åben eller lukket
  const [menuOpen, setMenuOpen] = useState(false);

  // Funktion der lukker mobilmenuen når et link klikkes
  const handleLinkClick = () => setMenuOpen(false);

  // useLocation hook giver os den aktuelle route/sti
  const location = useLocation();

  // Helper funktion der bestemmer om et link skal vises
  // Returnerer false hvis vi er på den aktuelle route (skjuler linket)
  const shouldShow = (route) => location.pathname !== route;

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img
              src={Logo}
              alt="Honi Nanoq personal logo"
              className={styles.logoImage}
              height={40}
            />
          </NavLink>
        </div>

        {/* Desktop navigation - kun synlig på større skærme */}
        <nav className={styles.navDesktop}>
          {/* Conditional rendering - vis kun home link hvis vi ikke er på home siden */}
          {shouldShow("/") && (
            <NavLink to="/" className={styles.link}>
              Home
            </NavLink>
          )}
          {shouldShow("/about") && (
            <NavLink to="/about" className={styles.link}>
              About
            </NavLink>
          )}
          {shouldShow("/projects") && (
            <NavLink to="/projects" className={styles.link}>
              Projects
            </NavLink>
          )}
          {shouldShow("/resume") && (
            <NavLink to="/resume" className={styles.link}>
              Resume
            </NavLink>
          )}
          {shouldShow("/contact") && (
            <NavLink to="/contact" className={styles.link}>
              Contact
            </NavLink>
          )}
        </nav>
      </div>

      {/* Hamburger menu ikon - kun synlig på mobile enheder */}
      <div className={styles.burgerIcon} onClick={() => setMenuOpen(true)}>
        <RxHamburgerMenu size={28} />
      </div>
      {/* Mobile menu overlay - vises kun når menuOpen state er true */}
      <div className={`${styles.overlay} ${menuOpen ? styles.show : ""}`}>
        {/* Luk knap for mobilmenu */}
        <div className={styles.closeIcon} onClick={() => setMenuOpen(false)}>
          <IoClose size={28} />
        </div>

        {/* Mobile navigation links */}
        <nav className={styles.navMobile}>
          {/* Alle mobile links bruger handleLinkClick onClick handler */}
          <NavLink
            to="/"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            Projects
          </NavLink>
          <NavLink
            to="/resume"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            Resumé
          </NavLink>
          <NavLink
            to="/contact"
            className={styles.mobileLink}
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
