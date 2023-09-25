import BuyTicket from "../BuyTicket/BuyTicket";
import Card from "../Card/Card";
import RGBSplitText from "../RGBSplitText/RGBSplitText";
import { Text } from "../Text/Text";
import styles from "./tickets.module.css";

type Props = {};

export const Tickets = (props: Props) => {
  return (
    <div id="buy-tickets" className={styles["tickets-container"]}>
      <RGBSplitText className={styles["title"]}>Ingressos</RGBSplitText>
      <div className={styles["buy-tickets-container"]}>
        <BuyTicket soldOut expired title="Lote 0" price="150,00" />
        <BuyTicket title="1º Lote" price="250,00" />
        <BuyTicket expired title="2º Lote" price="300,00" />
      </div>
    </div>
  );
};
