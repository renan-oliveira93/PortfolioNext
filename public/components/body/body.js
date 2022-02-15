import React from 'react';
import './style.css';
import NavBar from '../navbar/navbar';
import Bio from '../bio/bio';
import Tecnologias from '../tecnologias/tecnologias';
import Apresentacao from '../apresentacao/apresentaao';
import Contato from '../contato/contato';


 function Body () {
   return(
     <div className='container-principal'>           
               <NavBar/> 
               <Apresentacao/>
          <div className='div-1'>
               <Bio/>
               <Contato/> 
          </div>                  
               <Tecnologias/>           
     </div>
    )
};
export default Body;