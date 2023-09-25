import React from "react";
import styles from "./info.module.css";
import RGBSplitText from "../RGBSplitText/RGBSplitText";
import { Text } from "../Text/Text";
import Card from "../Card/Card";

type Props = {};

const Info = (props: Props) => {
  return (
    <div className={styles["wrapper"]}>
      <Card>
        <RGBSplitText className={styles["title"]}>
          Pela Primeira vez em Curitiba
        </RGBSplitText>
        <Text className={styles["content-text"]}>
          O evento que vai trazer os profissionais que estão liderando alguns do
          projetos mais empolgantes da atualidade, reunidos com a missão de
          acelerar sua carreira
        </Text>
        <Text className={styles["content-text"]}>
          Tudo isso somado a um ambiente todo pensando para você conhecer outros
          profissionais incríveis e trocar experiências com eles
        </Text>
        <RGBSplitText>
          Venha conosco e desfrute o melhor dos profissionais de tecnologia de
          Curitiba
        </RGBSplitText>
      </Card>
    </div>
  );
};

export default Info;
