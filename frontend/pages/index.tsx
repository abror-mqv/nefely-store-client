import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./src/components/Footer/Footer";

import Header from "./src/components/Header/Header";
import HomeContent from "./src/components/HomeContent/HomeContent";
import NavBar from "./src/components/Navbar/NavBar";
export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Header/>
        <NavBar/>
        <HomeContent/>
        <Footer/>
      </main>
    </div>
  );
}
