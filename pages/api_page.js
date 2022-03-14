import NavBar from "../src/components/navbar/navbar";
import styles from "../styles/Home.module.css";
import Tempo from "../src/components/tempo/tempo";
import Head from "next/head";
import Footer from "../src/components/footer/footer";
import MenuMobile from "../src/components/menu_mobile/menu_mobile";
import Moedas from "../src/components/moedas/moedas";


export default function ApiPage() {
    return (
        <div>
            <Head>
                <title>Portfólio | API</title>
            </Head>
            <MenuMobile />
            <NavBar />
            <div className={styles.container}>
                <h1 className={styles.titulo_pagina_api}>Página de consumo de api</h1>
            </div>
            <div className={styles.apis}>
                <Tempo />
                <Moedas />
            </div>
            <Footer />
        </div>
    )
}