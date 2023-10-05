import React, { useMemo } from "react";
import styles from "./speakers.module.css";
import RGBSplitText from "../RGBSplitText/RGBSplitText";
import { SpeakerCard } from "../SpeakerCard/SpeakerCard";

type Props = {};

const speakers = [
  {
    name: "Erick Wendel",
    talk: {
      description: "Usando Machine learning dentro do navegador",
      title: "Palestra:",
    },
    img: { src: "erick-wendel.jpeg", alt: "Erick Wendel" },
  },
  {
    name: "Adolfo Neto",
    talk: {
      description: "Uma introdução a Elixir",
      title: "Palestra:",
    },
    img: {
      src: "AdolfoNeto.jpeg",
      alt: "Adolfo Neto",
    },
  },
  {
    name: "Bruno Patinho",
    talk: {
      description: "Finalmente é possível? Mobile e Web em uma única codebase",
      title: "Palestra:",
    },
    img: { src: "patinho.jpeg", alt: "Bruno Patinho" },
  },
  {
    name: "Tech Anne",
    talk: {
      description: "????????",
      title: "Palestra:",
    },
    img: {
      src: "Anne.JPG",
      alt: "Tech Anne",
    }
  },
  {
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
