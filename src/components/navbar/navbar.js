import React from 'react';
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

 function NavBar () {
   return(
        <div className={styles.navbar}>
           <div>
               <Link href='./'>
                   <a className={styles.link_home}>HOME</a>
               </Link>              
           </div>
           <div>
                <Link href='/contato'>
                    <a className={styles.navbar_links}>CONTATO</a>
                </Link>
                
                <Link href='/chat'>
                    <a className={styles.navbar_links}>CHAT</a>
                </Link>
                
                <Link href='/api_page'>
                    <a className={styles.navbar_links}>API</a>
                </Link>                
           </div>
        </div>
    )
};
export default NavBar;