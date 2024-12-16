// Home.jsx
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentLeft}>
        <h1 className={styles.title}>Binary Tree Search</h1>
        <p className={styles.subtitle}>
          Create a visualization for Binary Search Tree.
        </p>
      </div>
      <div className={styles.contentRight}>
        <Link to="/enter-numbers" className={styles.ctaButton}>
          Try Visualizer
        </Link>
      </div>
    </div>
  );
};

export default Home;
