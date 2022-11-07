import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "./src/components/Header/Header";
export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Header/>
      </main>
    </div>
  );
}
