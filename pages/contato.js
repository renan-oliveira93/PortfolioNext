import NavBar from "../src/components/navbar/navbar";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "../src/components/footer/footer";

export default function Contato() {
    return (
        <div>
            <Head>
                <title>Portfólio | Contato</title>
            </Head>
            <NavBar />
            <div className={styles.container}>

                <h1 className={styles.titulo_contato}>Entre em contato:</h1>

                <div className={styles.container_contatos}>
                    <a href="https://linkedin.com/in/renan-oliveira93" target="_blank"  rel="noreferrer">
                    <img src='/assets/linkedin.png' width='50' height='50' alt="icone Linkedin"/> - Conta do Linkedin</a>
                    
                    <a href="https://github.com/renan-oliveira93" target="_blank" rel="noreferrer">
                    < img src='/assets/github.png' width='50' height='50'  alt="icone GitHub"/> - Repositórios no Github</a>
                    
                    <a href="mailto:renan_oliveira93@outlook.com.br" target="_blank" rel="noreferrer">
                    < img  src='/assets/e-mail.png'width='50' height='50' alt="icone e-mail"/> - E-mail: renan_oliveira93@outlook.com.br</a>  
    
                    <a href="https://api.whatsapp.com/send?phone=5511964885816" target="_blank" rel="noreferrer">
                    < img  src='/assets/whats-app.png' width='50' height='50'  alt="icone whats-app"/> - Whatsapp</a>
                    
                    <a href="tel:11964885816" target="_blank" rel="noreferrer">
                    < img  src='/assets/telefone.png' width='50' height='50' alt="icone telefone"/> - Telefone: (11) 9-6400-9557</a> 

                </div>                 
           
            </div>
           
            <Footer/>
        </div>
    )
}