import NavBar from "../src/components/navbar/navbar";
import styles from "../styles/Home.module.css";


export default function Contato () {
    return(
        <div>
            <NavBar/>
            <h1 className={styles.titulo_contato}>Página de contato</h1>
        </div>
    )
}