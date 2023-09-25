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
];

export const Speakers = (props: Props) => {
  const speakerCards = useMemo(() => {
    const speakerCards = [...speakers];
    let womenSpeakers = 3;

    const missingSpeakers = new Array(6 - speakerCards.length)
      .fill(null)
      .map(() => {
        const speaker = {
          isFemale: womenSpeakers > 0,
          name: "????????",
          talk: {
            description: "????????",
            title: "Palestra:",
          },
          img:
            womenSpeakers > 0
              ? {
                  src: "a-confirmar-mulher.png",
                  alt: "Palestrante Mulher não confirmada",
                }
              : {
                  src: "a-confirmar-homem.png",
                  alt: "Palestrante Homem não confirmado",
                },
        };
        womenSpeakers--;
        return speaker;
      });

    const unorderedSpeakers = speakerCards.concat(missingSpeakers);

    const females = unorderedSpeakers.filter((obj) => obj.isFemale);
    const males = unorderedSpeakers.filter((obj) => !obj.isFemale);

    const resultArray = [];
    for (let i = 0; i < females.length; i++) {
      resultArray.push(males[i]);
      resultArray.push(females[i]);
    }

    return resultArray;
  }, []);

  return (
    <div className={styles["info-wrapper"]}>
      <RGBSplitText displacement={1.2} className={styles["title"]}>
        Presenças confirmadas
      </RGBSplitText>

      <div className={styles["speakers-container"]}>
        {speakerCards.map((speaker, idx) => (
          <SpeakerCard
            speakerName={speaker.name}
            talk={speaker.talk}
            img={speaker.img}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
