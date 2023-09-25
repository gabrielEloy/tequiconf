import React, { useLayoutEffect, useRef } from "react";
import styles from "./popup.module.css";
import RGBSplitText from "../RGBSplitText/RGBSplitText";

type Props = {
  containerStyle?: React.CSSProperties;
  title?: string;
  className?: string;
};

const PopUp = ({
  children,
  containerStyle,
  title,
  className,
}: React.PropsWithChildren<Props>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const containerSize = containerRef?.current?.getBoundingClientRect();
    const bodySize = bodyRef?.current?.getBoundingClientRect();
    const headerSize = headerRef?.current?.getBoundingClientRect();

    console.log({
      containerSize: containerSize?.height,
      bodySize: bodySize?.height,
      headerSize: headerSize?.height,
    });
  }, []);

  const wrapperClassName = className
    ? `${styles["popup-window"]} ${className}`
    : styles["popup-window"];

  return (
    <div ref={containerRef} className={wrapperClassName} style={containerStyle}>
      <div ref={bodyRef} className={styles["popup-window-header"]}>
        <RGBSplitText>{title}</RGBSplitText>
      </div>
      <div ref={headerRef} className={styles["popup-window-body"]}>
        {children}
      </div>
    </div>
  );
};

export default PopUp;
