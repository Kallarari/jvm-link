import React, { useState } from "react";
import styles from "./styles.module.css";
import { Icon } from "@iconify/react";

interface cardprops {
  image: string;
  name: string;
}

const Card = ({ image, name }: cardprops) => {
  const [liked, setliked] = useState(false);
  return (
    <div
      className={styles.projectContainer}
      style={{
        backgroundImage: `url(./${image})`,
      }}
      onClick={() => setliked(!liked)}
    >
      <div className={styles.projectFooter}>
        <p className={styles.footerText}>{name}</p>
        <p className={styles.footerText}>
          {!liked ? (
            <Icon
              style={{ color: "white" }}
              icon="mdi:heart-outline"
            />
          ) : (
            <Icon
              style={{ color: "#fff" }}
              icon="mdi:heart"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
