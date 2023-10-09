import { Button } from "../Button/Button";
import PopUp from "../PopUp/PopUp";
import RGBSplitText from "../RGBSplitText/RGBSplitText";
import { Text } from "../Text/Text";
import styles from "./buyticket.module.css";

interface IBuyTicket {
  title: string;
  price: string;
  expired?: boolean;
  soldOut?: boolean;
  coupon?: string;
}

const BuyTicket = ({ title, price, expired = false, soldOut, coupon }: IBuyTicket) => {
  const popUpClassName = expired ? styles["expired"] : "";

  const hotMartLink = coupon ? `https://pay.hotmart.com/P86883358Q?checkoutMode=10&bid=1695756532780&offDiscount=${coupon}` : 'https://pay.hotmart.com/P86883358Q?checkoutMode=10&bid=1695756532780'

  return (
    <div className={styles["buy-ticket-wrapper"]}>
      <PopUp className={popUpClassName} title={title}>
        <Text style={{ marginTop: 40 }}>Válido até esgotarem os ingressos</Text>
        <RGBSplitText
          style={{
            cursor: "pointer",
            fontSize: 28,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          {`R$ ${price}`}
        </RGBSplitText>
        {expired ? (
          <Button disabled={expired}>
            <RGBSplitText style={!expired ? { cursor: "pointer" } : undefined}>
              Comprar
            </RGBSplitText>
          </Button>
        ) : (
          <a href={hotMartLink}>
            <Button disabled={expired}>
              <RGBSplitText
                style={!expired ? { cursor: "pointer" } : undefined}
              >
                Comprar
              </RGBSplitText>
            </Button>
          </a>
        )}
      </PopUp>
      {soldOut && (
        <div className={styles["sold-out-banner"]}>
          <RGBSplitText className={styles["sold-out-text"]}>
            Esgotado
          </RGBSplitText>
        </div>
      )}
    </div>
  );
};

export default BuyTicket;
