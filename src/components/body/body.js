import NavBar from '../navbar/navbar';
import Apresentacao from '../apresentacao/apresentacao';
import Bio from '../bio/bio';
import Tecnologias from '../tecnologias/tecnologias';
import Contato from '../contato/contato';
import styles from '../../../styles/Home.module.css';
import MenuMobile from '../menu_mobile/menu_mobile';

function Body() {
     return (
          <div >
               <MenuMobile />
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