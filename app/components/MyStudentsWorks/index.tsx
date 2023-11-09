import React from "react";

import styles from "./styles.module.css";

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
      image: "music-app.png",
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
        {projetos.map((item) => (
          <div
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

export default MyStudentsWorks;
