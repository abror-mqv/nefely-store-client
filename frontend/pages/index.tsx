import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./src/components/Footer/Footer";

import Header from "./src/components/Header/Header";
import HomeContent from "./src/components/HomeContent/HomeContent";
export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Header/>
        <HomeContent/>
        <Footer/>
      </main>
    </div>
  );
}
