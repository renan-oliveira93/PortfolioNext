import NavBar from "../src/components/navbar/navbar";
import styles from "../styles/Home.module.css";
import Tempo from "../src/components/tempo/tempo";

export default function ApiPage () {
    return(
        <div>
            <NavBar/>
            <h1 className={styles.titulo_pagina_api}>Página de api</h1>
            <Tempo/>
        </div>
    )
}