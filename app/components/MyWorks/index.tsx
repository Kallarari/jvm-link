import React from "react";

import styles from "./styles.module.css";
import Card from "../MyStudentsWorks/card";

const MyWorks: React.FC = () => {
  const projetos = [
    {
      name: "Birva portfólio",
      image: "birva.PNG",
    },
    {
      name: "Briefing JVM",
      image: "briefing-jvm.PNG",
    },
    {
      name: "Buy me a coffe",
      image: "buy-me-a-coffee.png",
    },
    {
      name: "Hess quiro",
      image: "hess.PNG",
    },
    {
      name: "Vico quiro",
      image: "vico.PNG",
    },
    {
      name: "Menu",
      image: "menu.PNG",
    },
    {
      name: "HorseStore",
      image: "horse-tech.PNG",
    },
    {
      name: "JVM Website",
      image: "jvm-site-figma.PNG",//
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>MEUS PROJETOS</h2>
      <div className={styles.galery}>
        {projetos.map((item,key) => (
          <Card name={item.name} image={item.image} key={key} />
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
