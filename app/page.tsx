"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import MyWorks from "./components/MyWorks";
import MyStudentsWorks from "./components/MyStudentsWorks";
import Footer from "./components/Footer";

export default function Home() {
  const [initi, setInit] = useState(false);
  useEffect(() => {
    setInit(true);
  }, []);
  return (
    <main className={styles.main}>
      <div
        className={styles.image}
        style={{ marginTop: !initi ? "0px" : "-50vh" }}
      >
        <h1 className={styles.NameTitle}>João Vitor Minosso</h1>
      </div>
      <div className={styles.container}>
        <Button link="https://api.whatsapp.com/send/?phone=5548999383088&text=Ol%C3%A1+Jo%C3%A3o%2C+quero+saber+mais+sobre+as+aulas+particulares%21&type=phone_number&app_absent=0">
          meu Whatsapp
        </Button>
        <Button link="https://portfolio-kallarari.vercel.app/">meu site</Button>
        <MyWorks />
        <MyStudentsWorks />
        <Button link="https://api.whatsapp.com/send/?phone=5548999383088&text=Ol%C3%A1+Jo%C3%A3o%2C+quero+saber+mais+sobre+as+aulas+particulares%21&type=phone_number&app_absent=0">
          saiba mais
        </Button>
        <Footer />
      </div>
    </main>
  );
}
