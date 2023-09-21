import React from "react";
import styles from "./hero.module.css";
import Globe from "../SVG/Globe";
import Grid from "../SVG/Grid";
import PopUp from "../PopUp/PopUp";
import RGBSplitText from "../RGBSplitText/RGBSplitText";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className={styles["hero-content"]}>
      <div className={styles["hero"]}>
        <img className={styles["statue-man"]} src="/statue-man.png" />
        <div className={styles["popup-window"]}>
          <PopUp>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              style={{ marginTop: 30, maxWidth: "120%" }}
              src="/tequiconf-logo.png"
              alt="Tequiconf"
            />
            <RGBSplitText style={{ marginTop: 40 }}>
              Os melhores profissionais de tech
            </RGBSplitText>
            <RGBSplitText style={{ marginTop: 20 }}>
              Reunidos em curitiba, com 1 missão
            </RGBSplitText>
            <RGBSplitText style={{ marginTop: 50 }}>
              Acelerar a sua carreira!
            </RGBSplitText>
          </PopUp>
        </div>
        <img className={styles["statue-woman"]} src="/statue-woman.png" />
      </div>
    </div>
  );
};

export default Hero;
