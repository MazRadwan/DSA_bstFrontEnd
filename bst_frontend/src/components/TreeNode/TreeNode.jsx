// TreeNode.jsx
import { useEffect, useState } from "react";
import styles from "./TreeNode.module.css";

const TreeNode = ({ value, left, right }) => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    minX: 0,
    minY: 0,
  });

  const getDepth = (node) => {
    if (!node) return 0;
    return 1 + Math.max(getDepth(node.left), getDepth(node.right));
  };

  const calculateLayout = (
    node,
    level,
    leftBound,
    rightBound,
    parentX = null,
    parentY = null
  ) => {
    if (!node) return { nodes: [], connections: [] };

    const xPos = (leftBound + rightBound) / 2;
    const yPos = level * 80; // Increased vertical spacing

    const nodes = [{ value: node.value, x: xPos, y: yPos }];
    const connections = [];

    if (parentX !== null) {
      connections.push({
        x1: parentX,
        y1: parentY,
        x2: xPos,
        y2: yPos,
      });
    }

    const spacing = Math.max(60, (rightBound - leftBound) / 3); // Adjusted spacing
    const leftResults = calculateLayout(
      node.left,
      level + 1,
      leftBound,
      xPos,
      xPos,
      yPos
    );
    const rightResults = calculateLayout(
      node.right,
      level + 1,
      xPos,
      rightBound,
      xPos,
      yPos
    );

    return {
      nodes: [...nodes, ...leftResults.nodes, ...rightResults.nodes],
      connections: [
        ...connections,
        ...leftResults.connections,
        ...rightResults.connections,
      ],
    };
  };

  const getTreeDimensions = (nodes) => {
    if (!nodes.length) return { width: 0, height: 0, minX: 0, minY: 0 };

    const minX = Math.min(...nodes.map((n) => n.x)) - 40;
    const maxX = Math.max(...nodes.map((n) => n.x)) + 40;
    const minY = Math.min(...nodes.map((n) => n.y)) - 40;
    const maxY = Math.max(...nodes.map((n) => n.y)) + 40;

    return {
      width: maxX - minX,
      height: maxY - minY,
      minX,
      minY,
    };
  };

  useEffect(() => {
    const depth = getDepth({ value, left, right });
    const width = Math.pow(2, depth) * 100; // Increased base width
    const layout = calculateLayout({ value, left, right }, 0, 0, width);
    setNodes(layout.nodes);
    setConnections(layout.connections);
    setDimensions(getTreeDimensions(layout.nodes));
  }, [value, left, right]);

  return (
    <div className={styles.treeContainer}>
      <svg
        viewBox={`${dimensions.minX} ${dimensions.minY} ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMidYMid meet"
        className={styles.svg}
      >
        {connections.map((conn, index) => (
          <line
            key={`conn-${index}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="#4a90e2"
            strokeWidth="2"
            className={styles.connection}
          />
        ))}
        {nodes.map((node, index) => (
          <g key={`node-${index}`} transform={`translate(${node.x},${node.y})`}>
            <circle r="20" fill="#4a90e2" className={styles.nodeCircle} />
            <text
              fill="white"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="14"
              fontWeight="bold"
            >
              {node.value}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default TreeNode;
