import styles from "./card.module.css";
import React from "react";

const Card = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className={styles["card"]}>{children}</div>;
};

export default Card;
