import BinarySearchTree from "../../components/BinarySearchTree/BinarySearchTree";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Binary Search Tree Visualizer</h1>
      <BinarySearchTree />
    </div>
  );
};

export default Home;
