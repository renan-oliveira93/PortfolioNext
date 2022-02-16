import NavBar from "../src/components/navbar/navbar";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../src/components/footer/footer";


export default function Chat () {
    return(
        <div>
            <Head>
                <title>Portfólio | Chat</title>
            </Head>
            <NavBar/>
            <h1 className={styles.titulo_chat}>Página do chat</h1>
            <Footer/>
        </div>
    )
}