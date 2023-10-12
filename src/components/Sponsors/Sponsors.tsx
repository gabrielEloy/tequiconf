import React from "react";
import styles from "./sponsors.module.css";
import RGBSplitText from "../RGBSplitText/RGBSplitText";
import Link from "next/link";

interface ISponsors {}
interface ISponsor {
  img: string;
  alt: string;
  link: string;
}

const Sponsor = ({ img, alt, link }: ISponsor) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className={styles["sponsor-container"]}
      href={link}
    >
      <img className={styles["sponsor-img"]} alt={alt} src={img} />
    </Link>
  );
};

const sponsors: ISponsor[] = [
  {
    alt: "Foaan",
    img: "Foaan.png",
    link: "https://foaan.com.br/",
  },
  {
    alt: "Conta Dev",
    img: "conta-dev.png",
    link: "http://conta-dev.com/",
  },
];

const Sponsors = (props: ISponsors) => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["container"]}>
        <RGBSplitText className={styles["title"]}>
          Parceiros do evento
        </RGBSplitText>

        <div className={styles["sponsors-section"]}>
          {sponsors.map((sponsor) => (
            <Sponsor key={sponsor.link} {...sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
