"use client";

import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import { Canvas } from "@/components/Canvas/Canvas";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles["hero-container"]}>
        <Canvas />
        <Hero />
      </div>
      {/* <div className={styles['info']}>
        heeey
      </div> */}
    </div>
  );
};

export default Home;
