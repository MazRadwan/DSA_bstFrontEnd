import TreeHistory from "../../components/TreeHistory/TreeHistory";
import styles from "./PreviousTrees.module.css";

const PreviousTrees = () => {
  return (
    <div className={styles.container}>
      <TreeHistory />
    </div>
  );
};

export default PreviousTrees;
