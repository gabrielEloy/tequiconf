import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "../Accordion/Accordion";
import styles from "./quetionsAndAnswers.module.css";
import RGBSplitText from "../RGBSplitText/RGBSplitText";

interface IQuestionsAndAnswers {}

const questionsArr = [
  {
    title: "Pra quem é o evento?",
    content:
      "A Tequiconf é o evento ideal para todos os níveis de carreira. Desde você que está iniciando sua carreira, até você que já é um(a) veterano(a) no mercado. Nossos palestrantes trarão assuntos quentes e em voga no mercado, de maneira didática para que eles possam ser apreciados por você, independentemente do ponto em que você esteja na sua carreira",
  },
  {
    title: "Por que eu deveria participar?",
    content:
      "Além de todas as palestras fenomenais dadas por alguns dos mais renomados profissionais do mercado, o evento será focado em gerar conexões produtivas e duradouras entre todos os presentes. Queremos que depois de sair do evento, você tenha feito aquela conexão que vai te ajudar no seu projeto atual, que vai te indicar pro trabalho dos seus sonhos, que vai abrir uma empresa contigo ou 'só' vai virar uma boa amizade mesmo",
  },
  {
    title: "Vocês emitem certificado de participação?",
    content:
      "Sim! Alguns dias depois do evento, você vai receber um certificado no seu email!",
  },
];

const QuestionsAndAnswers = (props: IQuestionsAndAnswers) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["accordion"]}>
        <RGBSplitText className={styles["title"]}>
          Perguntas Frequentes
        </RGBSplitText>
        <Accordion>
          {questionsArr.map(({ content, title }, i) => (
            <AccordionItem key={title}>
              <AccordionHeader>{title}</AccordionHeader>
              <AccordionPanel>{content}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default QuestionsAndAnswers;
