// EnterNumbers.jsx
import BinarySearchTree from "../../components/BinarySearchTree/BinarySearchTree";
import styles from "./EnterNumbers.module.css";

const EnterNumbers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Enter Numbers</h1>
        <p className={styles.subtitle}>
          Create a visualization for Binary Search Tree.
        </p>
      </div>
      <div className={styles.visualizerSection}>
        <BinarySearchTree />
      </div>
    </div>
  );
};

export default EnterNumbers;
