import React from "react";
import styles from "./text.module.css";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

export const Text = (props: React.PropsWithChildren<Props>) => {
  const textClassName = props.className
    ? `${styles["text"]} ${props.className}`
    : styles["text"];

  return (
    <p style={props.style} className={textClassName}>
      {props.children}
    </p>
  );
};
