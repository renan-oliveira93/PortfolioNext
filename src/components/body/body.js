import NavBar from '../navbar/navbar';
import Bio from '../bio/bio';
import Tecnologias from '../tecnologias/tecnologias';
import Contato from '../contato/contato';
import Tempo from '../tempo/tempo';
import styles from '../../../styles/Home.module.css';

 function Body () {
   return(
     <div >
          
          <h1 className={styles.title}>
                Renan de Oliveira 
          </h1>
          <h2 className={styles.title_description}>
                Desenvolvedor Front-End
          </h2>           
               <NavBar/> 
          <div className={styles.div_1}>
               <Bio/>
               <Contato/>
          </div> 
               <Tecnologias/>
               <Tempo/>  
     </div>
    )
};
export default Body;