import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.brand}>
          Tree Visualizer
        </Link>
        <div className={styles.navLinks}>
          <Link
            to="/"
            className={`${styles.navItem} ${
              location.pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/enter-numbers"
            className={`${styles.navItem} ${
              location.pathname === "/enter-numbers" ? styles.active : ""
            }`}
          >
            Enter Numbers
          </Link>
          <Link
            to="/previous-trees"
            className={`${styles.navItem} ${
              location.pathname === "/previous-trees" ? styles.active : ""
            }`}
          >
            Previous Trees
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
