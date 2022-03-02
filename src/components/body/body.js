import NavBar from '../navbar/navbar';
import Apresentacao from '../apresentacao/apresentacao';
import Bio from '../bio/bio';
import Tecnologias from '../tecnologias/tecnologias';
import Contato from '../contato/contato';
import styles from '../../../styles/Home.module.css';

function Body() {
     return (
          <div >
               <Apresentacao />
               <NavBar />
               <div className={styles.div_1}>
                    <Bio />
                    <Contato />
               </div>
               <Tecnologias />

          </div>
     )
};
export default Body;