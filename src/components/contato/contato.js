import React from "react";
import styles from '../../../styles/Home.module.css';

function Contato () {
    return(
        <div className={styles.container}>
            
                <h2>Contato</h2>          
            
            <div className={styles.container_contato}>
                     <a href="https://linkedin.com/in/renan-oliveira93" target="_blank"  rel="noreferrer">
                    <img src='/assets/linkedin.png' width='30' height='30' alt="icone Linkedin"/></a>
                    <a href="https://github.com/renan-oliveira93" target="_blank" rel="noreferrer">
                    < img src='/assets/github.png' width='30' height='30'  alt="icone GitHub"/></a>
                    <a href="mailto:renan_oliveira93@outlook.com.br" target="_blank" rel="noreferrer">
                    < img  src='/assets/e-mail.png' width='30' height='30' alt="icone e-mail"/></a>                                
                    <a href="https://api.whatsapp.com/send?phone=5511964885816" target="_blank" rel="noreferrer">
                    < img  src='/assets/whats-app.png' width='30' height='30'  alt="icone whats-app"/></a>
                    <a href="tel:11964885816" target="_blank" rel="noreferrer">
                    < img  src='/assets/telefone.png'width='30' height='30' alt="icone telefone"/></a>  
            </div>         
            
        </div>
    )
};

export default Contato;