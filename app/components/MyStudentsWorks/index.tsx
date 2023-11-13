import React from "react";

import styles from "./styles.module.css";
import Card from "./card";

const MyStudentsWorks: React.FC = () => {
  const projetos = [
    {
      name: "Drink app",
      image: "drink-app.PNG",
    },
    {
      name: "Horse store",
      image: "horse-store.PNG",
    },
    {
      name: "Music app",
      image: "music-app.PNG",
    },
    {
      name: "Horse web",
      image: "horse-store-2.PNG",
    },
    {
      name: "Rede Social",
      image: "social-media.PNG",
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>PROJETOS DOS MEUS ALUNOS</h2>
      <div className={styles.galery}>
        {projetos.map((item, key) => (
          <Card name={item.name} image={item.image} key={key} />
        ))}
      </div>
      <p className={styles.subtitle}>VAGAS LIMITADAS</p>
    </div>
  );
};

export default MyStudentsWorks;
