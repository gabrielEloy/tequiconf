import React, { useMemo } from "react";
import styles from "./speakers.module.css";
import RGBSplitText from "../RGBSplitText/RGBSplitText";
import { SpeakerCard } from "../SpeakerCard/SpeakerCard";

type Props = {};

const speakers = [
  {
    isFemale: false,
    name: "Erick Wendel",
    talk: {
      description: "Usando Machine learning dentro do navegador",
      title: "Palestra:",
    },
    img: { src: "erick-wendel.jpeg", alt: "Erick Wendel" },
  },
  {
    isFemale: false,
    name: "Bruno Patinho",
    talk: {
      description: "Finalmente é possível? Mobile e Web em uma única codebase",
      title: "Palestra:",
    },
    img: { src: "patinho.jpeg", alt: "Bruno Patinho" },
  },
  {
    isFemale: true,
    name: "????????",
    talk: {
      description: "????????",
      title: "Palestra:",
    },
    img: true
      ? {
          src: "a-confirmar-mulher.png",
          alt: "Palestrante Mulher não confirmada",
        }
      : {
          src: "a-confirmar-homem.png",
          alt: "Palestrante Homem não confirmado",
        },
  },
  {
    isFemale: false,
    name: "????????",
    talk: {
      description: "????????",
      title: "Palestra:",
    },
    img: false
      ? {
          src: "a-confirmar-mulher.png",
          alt: "Palestrante Mulher não confirmada",
        }
      : {
          src: "a-confirmar-homem.png",
          alt: "Palestrante Homem não confirmado",
        },
  },
  {
    isFemale: true,
    name: "????????",
    talk: {
      description: "????????",
      title: "Palestra:",
    },
    img: true
      ? {
          src: "a-confirmar-mulher.png",
          alt: "Palestrante Mulher não confirmada",
        }
      : {
          src: "a-confirmar-homem.png",
          alt: "Palestrante Homem não confirmado",
        },
  },
  {
    isFemale: true,
    name: "????????",
    talk: {
      description: "????????",
      title: "Palestra:",
    },
    img: true
      ? {
          src: "a-confirmar-mulher.png",
          alt: "Palestrante Mulher não confirmada",
        }
      : {
          src: "a-confirmar-homem.png",
          alt: "Palestrante Homem não confirmado",
        },
  },
];

export const Speakers = (props: Props) => {
  return (
    <div className={styles["info-wrapper"]}>
      <RGBSplitText displacement={1.2} className={styles["title"]}>
        Presenças confirmadas
      </RGBSplitText>

      <div className={styles["speakers-container"]}>
        {speakers.map((speaker, idx) => (
          <SpeakerCard
            speakerName={speaker?.name}
            talk={speaker?.talk}
            img={speaker?.img}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
