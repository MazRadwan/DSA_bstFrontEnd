import BinarySearchTree from "../../components/BinarySearchTree/BinarySearchTree";
import styles from "./EnterNumbers.module.css";

const EnterNumbers = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Enter Numbers</h1>
      <BinarySearchTree />
    </div>
  );
};

export default EnterNumbers;
