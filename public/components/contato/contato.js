import React from "react";
import Imagem from "../../assets/linkedin.png";
import Imagem1 from "../../assets/github.png";
import Imagem2 from "../../assets/e-mail.png";
import Imagem3 from "../../assets/whats-app.png";
import Imagem4 from "../../assets/telefone.png";

function Contato () {
    return(
        <div className="container-contato container">
            
                <h2>Contato</h2>          
            
            <div className="container-contato-itens redes-sociais">
                     <a href="https://linkedin.com/in/renan-oliveira93" target="_blank"  rel="noreferrer">
                    < img className="container-contato-item " src={Imagem} alt="icone Linkedin"/></a>
                    <a href="https://github.com/renan-oliveira93" target="_blank" rel="noreferrer">
                    < img className="container-contato-item " src={Imagem1} alt="icone GitHub"/></a>
                    <a href="mailto:renan_oliveira93@outlook.com.br" target="_blank" rel="noreferrer">
                    < img className="container-contato-item " src={Imagem2} alt="icone e-mail"/></a>                                
            </div>   
            <div className="container-contato-itens redes-sociais">
                    <a href="https://api.whatsapp.com/send?phone=5511964885816" target="_blank" rel="noreferrer">
                    < img className="container-contato-item " src={Imagem3} alt="icone whats-app"/></a>
                    <a href="tel:11964885816" target="_blank" rel="noreferrer">
                    < img className="container-contato-item " src={Imagem4} alt="icone telefone"/></a>  
            </div>         
            
        </div>
    )
};

export default Contato;