import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.navItem}>
          Home
        </Link>
        <Link to="/enter-numbers" className={styles.navItem}>
          Enter Numbers
        </Link>
        <Link to="/previous-trees" className={styles.navItem}>
          Previous Trees
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
