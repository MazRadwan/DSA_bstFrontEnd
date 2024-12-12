import { useState } from "react";
import TreeNode from "../TreeNode/TreeNode";
import { treeService } from "../../services/treeService";
import styles from "./BinarySearchTree.module.css";

const BinarySearchTree = () => {
  const [numbers, setNumbers] = useState("");
  const [treeData, setTreeData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const numbersArray = numbers
        .split(",")
        .map((num) => parseInt(num.trim()));

      if (numbersArray.some(isNaN)) {
        throw new Error("Please enter valid numbers separated by commas");
      }

      const data = await treeService.processNumbers(numbersArray);
      setTreeData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="Enter numbers (e.g., 5,3,7,1,9)"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Create Tree
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </form>

      <div className={styles.treeContainer}>
        {treeData && <TreeNode {...JSON.parse(treeData.treeStructure)} />}
      </div>
    </div>
  );
};

export default BinarySearchTree;
