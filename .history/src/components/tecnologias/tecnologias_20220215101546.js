import styles from '../../../styles/Home.module.css';

 function Tecnologias () {
   return(       
         <div className={styles.container}>
                    <h2>Tecnologias</h2>
             <div className={styles.tecnologias}>
                <div>
                   <h3>javascript</h3>
                   < img className={styles.icone} src='/assets/javascript.png' alt='icone Javascrip'/>
               </div>
               <div className={styles.icones_tecnologias}>
                   <h3>React</h3>
                   < img className={styles.icone} src='/assets/react-link.png' alt='icone React'/>
               </div>
               <div className={styles.icones_tecnologias}>
                    <h3>React Native</h3>
                    < img className={styles.icone} src='/assets/react-native.png' alt='icone React Native'/>
               </div>
               <div className={styles.icones_tecnologias}>
                   <h3>Vue JS</h3>
                   < img className={styles.icone} src='/assets/vue.png' alt='icone Vue JS'/>
               </div>
               
               <div className={styles.icones_tecnologias}>
                   <h3>Node JS</h3>
                   < img className={styles.icone} src='/assets/node.png' alt='icone Node JS'/>
               </div>                              
               <div className={styles.icones_tecnologias}>
                   <h3>Bootstrap</h3>
                   < img className={styles.icone} src='/assets/bootstrap.png' alt='icone Bootstrap'/>
               </div>               
             </div>
         </div> 
        
                 
    )
};
export default Tecnologias;