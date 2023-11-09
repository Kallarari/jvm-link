import React from "react";

import styles from "./styles.module.css";
interface buttonPops {
  children: any;
  link: string;
}
const Button = ({ children, link }: buttonPops) => {
  return (
    <a href={link}>
      <div className={styles.container}>
        <p className={styles.text}>{children}</p>
      </div>
    </a>
  );
};

export default Button;
