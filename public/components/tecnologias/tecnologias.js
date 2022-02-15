import React from 'react';

import Imagem from '../../assets/react-link.png';
import Imagem1 from '../../assets/react-native.png';
import Imagem2 from '../../assets/node.png';
import Imagem3 from '../../assets/javascript.png';
import Imagem4 from '../../assets/angular.png';
import Imagem5 from '../../assets/bootstrap.png';
import Imagem6 from '../../assets/vue.png';


 function Tecnologias () {
   return(       
         <div className='container-tecnologias container'>
                    <h2>Tecnologias</h2>
             <div className='tecnologias'>
                <div className='icones-tecnologias'>
                   <h3>javascript</h3>
                   < img className='icone' src={Imagem3} alt='icone Javascrip'/>
               </div>
               <div className='icones-tecnologias'>
                   <h3>React</h3>
                   < img className='icone' src={Imagem} alt='icone React'/>
               </div>
               <div className='icones-tecnologias'>
                    <h3>React Native</h3>
                    < img className='icone' src={Imagem1} alt='icone React Native'/>
               </div>
               <div className='icones-tecnologias'>
                   <h3>Vue JS</h3>
                   < img className='icone' src={Imagem6} alt='icone Vue JS'/>
               </div>
               <div className='icones-tecnologias'>
                   <h3>Angular</h3>
                   < img className='icone' src={Imagem4} alt='icone Angular'/>
               </div>
               <div className='icones-tecnologias'>
                   <h3>Node JS</h3>
                   < img className='icone' src={Imagem2} alt='icone Node JS'/>
               </div>                              
               <div className='icones-tecnologias'>
                   <h3>Bootstrap</h3>
                   < img className='icone' src={Imagem5} alt='icone Bootstrap'/>
               </div>               
             </div>
         </div> 
        
                 
    )
};
export default Tecnologias;