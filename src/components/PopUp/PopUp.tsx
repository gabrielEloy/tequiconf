import React, { useLayoutEffect, useRef } from "react";
import styles from "./popup.module.css";

type Props = {};

const PopUp = ({ children }: React.PropsWithChildren<Props>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const containerSize = containerRef?.current?.getBoundingClientRect();
    const bodySize = bodyRef?.current?.getBoundingClientRect();
    const headerSize = headerRef?.current?.getBoundingClientRect();

    console.log({ containerSize: containerSize?.height, bodySize: bodySize?.height, headerSize: headerSize?.height });
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles["popup-window"]}
    >
      <div ref={bodyRef} className={styles["popup-window-header"]}></div>
      <div ref={headerRef} className={styles["popup-window-body"]}>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
