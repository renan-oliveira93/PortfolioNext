import styles from '../../../styles/Home.module.css';

export default function Footer () {
    return(
        <div>
            <footer className={styles.footer}>
                <p>
                    &copy; {new Date().getFullYear()} Renan de Oliveira - Todos os direitos reservados
                </p>
            </footer> 
        </div>
    )
};