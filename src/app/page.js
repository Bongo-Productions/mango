"use client";
// import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [mango, setMango] = useState(false);
  return (
    <div className={styles.mangoContainer}>
      <div onClick={() => setMango(true)}>
        <h1 className={styles.mango}>🥭</h1>
      </div>
      {mango && (
        <iframe
          loading="lazy"
          className={styles.mangoVideo}
          src="https://www.youtube.com/embed/yuyV6G6atoQ?autoplay=1"
          title="lfg"
        />
      )}
    </div>
  );
}
