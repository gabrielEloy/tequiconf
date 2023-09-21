import React from "react";
import styles from "./rgbsplit.module.css";

type Props = {
  children: string;
  splitColors?: [string, string];
  displacement?: number;
  style?: React.CSSProperties;
};

const RGBSplitText = ({
  children,
  splitColors = ["#02FFFF", "#FF32FF"],
  displacement = 1,
  style,
}: Props) => {
  const upperCaseText = children.toUpperCase();

  return (
    <div className={styles["wrapper"]}>
      <p
        style={{
          ...style,
          color: "white",
          fontWeight: "bold",
          letterSpacing: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        {upperCaseText}
      </p>
      <p
        className={styles["split-text"]}
        style={{
          ...style,
          zIndex: 0,
          transform: `translate(${displacement}px, ${displacement}px)`,
          color: splitColors[0],
          fontWeight: "bold",
          letterSpacing: 4,
        }}
      >
        {upperCaseText}
      </p>
      <p
        className={styles["split-text"]}
        style={{
          ...style,
          transform: `translate(-${displacement}px, -${displacement}px)`,
          color: splitColors[1],
          fontWeight: "bold",
          letterSpacing: 4,
          zIndex: 0,
        }}
      >
        {upperCaseText}
      </p>
    </div>
  );
};

export default RGBSplitText;
