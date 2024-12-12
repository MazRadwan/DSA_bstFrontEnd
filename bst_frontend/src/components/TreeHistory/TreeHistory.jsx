import { useState, useEffect } from "react";
import TreeNode from "../TreeNode/TreeNode";
import { treeService } from "../../services/treeService";
import styles from "./TreeHistory.module.css";

const TreeHistory = () => {
  const [previousTrees, setPreviousTrees] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPreviousTrees();
  }, []);

  const fetchPreviousTrees = async () => {
    try {
      const data = await treeService.getPreviousTrees();
      setPreviousTrees(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Previous Trees</h2>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.grid}>
        {previousTrees.map((tree, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Input Numbers</h3>
              <p>{tree.inputNumbers}</p>
            </div>
            <div className={styles.treeContainer}>
              <TreeNode {...JSON.parse(tree.treeStructure)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeHistory;
