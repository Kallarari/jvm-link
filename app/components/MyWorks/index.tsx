import React from "react";

import styles from "./styles.module.css";

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
          <div
          key={key}
            className={styles.projectContainer}
            style={{
              backgroundImage: `url(./${item.image})`,
            }}
          >
            <div className={styles.projectFooter}>
              <p className={styles.footerText}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
