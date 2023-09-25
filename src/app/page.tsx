"use client";

import Hero from "@/components/Hero/Hero";
import styles from "./page.module.css";
import { Canvas } from "@/components/Canvas/Canvas";
import { Speakers } from "@/components/Speakers/Speakers";
import Info from "@/components/Info/Info";
import { Tickets } from "@/components/Tickets/Tickets";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles["hero-container"]}>
        <Canvas />
        <Hero />
      </div>
      <div className={styles["speakers"]}>
        <Speakers />
        <Info />
        <Tickets />
      </div>
    </div>
  );
};

export default Home;
