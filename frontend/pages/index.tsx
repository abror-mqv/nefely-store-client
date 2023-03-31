import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./src/components/Footer/Footer";
import Header from "./src/components/Header/Header";
import HomeContent from "./src/components/HomeContent/HomeContent";
import NavBar from "./src/components/Navbar/NavBar";
import { useAppDispatch, useAppSelector } from "./src/hooks/redux";
import { userSlice } from "./src/store/reducers/UserSlice";
import { useEffect } from "react";
import { fetchUsers } from "./src/store/reducers/ActionCreators";

export default function Home() {
  const dispatch = useAppDispatch()
  const {users} = useAppSelector(state => state.userReducer)
  useEffect(()=>{
    dispatch(fetchUsers())
  }, [])
  return (
    <div className={styles.container}>
      <main>
        <Header/>
        <h1>{JSON.stringify(users, null, 2)}</h1>
        <NavBar/> 
        <HomeContent/>
        <Footer/>
      </main>
    </div>
  );
}
