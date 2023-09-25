import styles from "./button.module.css";

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const className = props.className
    ? styles["custom-button"]
    : `${styles["custom-button"]} ${props.className}`;
  
    return <button {...props} className={className}></button>;
};
