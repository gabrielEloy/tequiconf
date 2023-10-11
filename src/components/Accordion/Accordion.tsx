import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./accordion.module.css";
import { Text } from "../Text/Text";
import RGBSplitText from "../RGBSplitText/RGBSplitText";

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

export function Accordion({ children, multiple, defaultIndex }: any) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? [defaultIndex] : defaultIndex
  );

  function onChangeIndex(index: any) {
    setActiveIndex((currentActiveIndex: any) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i: any) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

export function AccordionItem({ children }: any) {
  return <div className={styles["AccordionItem"]}>{children}</div>;
}

export function AccordionHeader({ children }: any) {
  //  @ts-ignore
  const { isActive, index, onChangeIndex } = useAccordion();
  const className = `${styles["AccordionHeader"]} ${
    isActive ? styles["active"] : ""
  }`;

  return (
    <motion.div className={className} onClick={() => onChangeIndex(index)}>
      <RGBSplitText displacement={0.5} className={styles['header-title']}>{children}</RGBSplitText>
    </motion.div>
  );
}

export function AccordionPanel({ children }: any) {
  //  @ts-ignore
  const { isActive } = useAccordion();

  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <div className={styles["AccordionPanel"]}>
            <Text>{children}</Text>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
