import NavBar from "../src/components/navbar/navbar";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../src/components/footer/footer";


export default function Projetos () {
    return(
        <div>
            <Head>
                <title>Portfólio | Projetos</title>
            </Head>
            <NavBar/>
                <div className={styles.container}>
                    
                    <h1 className={styles.titulo_projetos}>Alguns projetos:</h1>
                    
                    <div className={styles.container_projetos}>
                        <p>SPA criada em NEXT.js durante curso na ALURA:</p>
                        <a href="https://alura-cases-renan-oliveira93.vercel.app/" target="_blank"  rel="noreferrer">
                        https://alura-cases-renan-oliveira93.vercel.app/</a>

                        <p>Simulação de um blog de tecnologia, página simples com HTML e CSS:</p>
                        <a href="https://renan-oliveira93.github.io/tecblogficticio/" target="_blank"  rel="noreferrer">
                        https://renan-oliveira93.github.io/tecblogficticio/</a>
                        
                        <p>Simulação de um porfólio de modelo, página simples com HTML e CSS:</p>
                        <a href="https://renan-oliveira93.github.io/Site-modelo-ficticio/" target="_blank"  rel="noreferrer">
                        https://renan-oliveira93.github.io/Site-modelo-ficticio/</a>
                        
                        <p>Simulação de um site de pousada, página simples com HTML e CSS:</p>
                        <a href="https://renan-oliveira93.github.io/Projeto-pousada-secreta-ficticio/" target="_blank"  rel="noreferrer">
                        https://renan-oliveira93.github.io/Projeto-pousada-secreta-ficticio/</a>
                
                    </div>

                </div>
            
            <Footer/>
        </div>
    )
}