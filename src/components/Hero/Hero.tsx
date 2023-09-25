import React from "react";
import styles from "./hero.module.css";
import Globe from "../SVG/Globe";
import Grid from "../SVG/Grid";
import PopUp from "../PopUp/PopUp";
import RGBSplitText from "../RGBSplitText/RGBSplitText";
import { Button } from "../Button/Button";

type Props = {};

const Hero = (props: Props) => {
  const scrollToTickets = () => {
    const ticketsDiv = document.getElementById("buy-tickets");
    ticketsDiv?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className={styles["hero-content"]}>
      <div className={styles["hero"]}>
        <img
          className={styles["statue-man"]}
          src="/statue-man.png"
          alt="Greek god"
        />
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
        <RGBSplitText
          style={{
            marginTop: 35,
          }}
          className={styles["date-text"]}
        >
          11/11/2023
        </RGBSplitText>
        <a
          target="_blank"
          href="https://www.google.com/search?q=fae+business+school&oq=FAE+bu&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDINCAcQLhivARjHARiABNIBCDEyMzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
          rel="noopener noreferrer"
        >
          <RGBSplitText
            style={{
              cursor: "pointer",
              marginTop: 15,
              textDecoration: "underline",
            }}
            className={styles["location-text"]}
          >
            FAE Centro Universitário
          </RGBSplitText>
        </a>

        <Button style={{ marginTop: 35 }} onClick={scrollToTickets}>
          <RGBSplitText style={{ cursor: "pointer" }}>
            Garanta sua vaga
          </RGBSplitText>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
