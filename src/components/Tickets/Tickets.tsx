import BuyTicket from "../BuyTicket/BuyTicket";
import Card from "../Card/Card";
import RGBSplitText from "../RGBSplitText/RGBSplitText";
import { Text } from "../Text/Text";
import styles from "./tickets.module.css";

type Props = {
  coupon?: string;
};

const couponsList = {
  BRUNO50: "200,00",
  VICTOR50: "200,00",
  JHONATAN50: "200,00",
};

export const Tickets = ({ coupon }: Props) => {
  const getPriceTicket = () => {
    //@ts-ignore
    if (couponsList?.[coupon]) return couponsList[coupon];

    return "250,00";
  };

  return (
    <div id="buy-tickets" className={styles["tickets-container"]}>
      <RGBSplitText className={styles["title"]}>Ingressos</RGBSplitText>
      <div className={styles["buy-tickets-container"]}>
        <BuyTicket soldOut expired title="Lote 0" price="150,00" />
        <BuyTicket coupon={coupon} title="1º Lote" price={getPriceTicket()} />
        <BuyTicket expired title="2º Lote" price="300,00" />
      </div>
    </div>
  );
};
