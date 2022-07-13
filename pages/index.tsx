import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            안녕하세요 저 그냥 넥스트JS로 할려구요
            안녕
        </div>
    );
};

export default Home;
