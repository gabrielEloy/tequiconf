import React from "react";
import styles from "./speaker-card.module.css";
import RGBSplitText from "../RGBSplitText/RGBSplitText";
import { Text } from "../Text/Text";
import { InstagramIcon, SpotifyIcon, TwitterIcon, YoutubeIcon } from "../Icons";

interface ISpeakerCard {
  speakerName: string;
  talk: {
    title: string;
    description: string;
  };
  img: {
    src: string;
    alt: string;
  };
}

export const SpeakerCard = ({ speakerName, talk, img }: ISpeakerCard) => {
  return (
    <div className={styles["card-wrapper"]}>
      <div className={styles["speaker-picture-container"]}>
        <img
          className={styles["speaker-picture"]}
          src={img.src}
          alt={img.alt}
        />
        <div className={styles["company-description"]}>
          <RGBSplitText>{speakerName}</RGBSplitText>
        </div>
      </div>
      <div className={styles["card-content"]}>
        <RGBSplitText style={{ fontSize: 12 }} displacement={0}>
          {talk.title}
        </RGBSplitText>
        <div className={styles["card-content-text"]}>
          <Text style={{ marginTop: 15 }}>{talk.description}</Text>
        </div>
        {/* <div className={styles["card-content-social-media"]}>
        <div className={styles['card-content-social-media-icons']}>
        <InstagramIcon />
        <SpotifyIcon />
        <TwitterIcon />
        <YoutubeIcon />
        </div>
      </div> */}
      </div>
    </div>
  );
};
