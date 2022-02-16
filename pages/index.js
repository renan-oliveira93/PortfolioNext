import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Body from '../src/components/body/body';


export default function Home() {
  return (
    <div>
      <Head>
          <title>Portfólio | Home</title>
          <meta http-Equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>   

      <Body/>  

      <footer className={styles.footer}>
        <p>
           &copy; {new Date().getFullYear()} Renan de Oliveira - Todos os direitos reservados
        </p>
      </footer> 

    </div>
  )
}
