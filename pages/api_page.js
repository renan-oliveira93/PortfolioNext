import NavBar from "../src/components/navbar/navbar";
import styles from "../styles/Home.module.css";
import Tempo from "../src/components/tempo/tempo";
import Head from "next/head";
import Footer from "../src/components/footer/footer";


export default function ApiPage () {
    return(
        <div>
            <Head>
                <title>Portfólio | API</title>
            </Head>
            <NavBar/>
                <div className={styles.container}>
                    <h1 className={styles.titulo_pagina_api}>Página de consumo api</h1>                    
                </div>            
            <Tempo/>
            <Footer/>
        </div>
    )
}