import styles from "./TreeNode.module.css";

const TreeNode = ({ value, left, right }) => {
  return (
    <div className={styles.nodeContainer}>
      <div className={styles.node}>{value}</div>
      <div className={styles.children}>
        {left && <TreeNode {...left} />}
        {right && <TreeNode {...right} />}
      </div>
    </div>
  );
};

export default TreeNode;
