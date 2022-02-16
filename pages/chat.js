import NavBar from "../src/components/navbar/navbar";
import styles from "../styles/Home.module.css";


export default function Chat () {
    return(
        <div>
            <NavBar/>
            <h1 className={styles.titulo_chat}>Página do chat</h1>
        </div>
    )
}