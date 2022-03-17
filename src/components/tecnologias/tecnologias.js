import styles from '../../../styles/Home.module.css';

function Tecnologias() {
    return (
        <div className={styles.tecnologias_component}>
            <div className={styles.container}>

                <h2 className={styles.container_tecnologias}>Tecnologias</h2>

                <div className={styles.tecnologias}>

                    <div className={styles.icones_tecnologias}>
                        <h3>javascript</h3>
                        < img className={styles.icone} src='/assets/javascript.png' alt='icone Javascrip' />
                    </div>

                    <div className={styles.icones_tecnologias}>
                        <h3>React</h3>
                        < img className={styles.icone} src='/assets/react-link.png' alt='icone React' />
                    </div>

                    <div className={styles.icones_tecnologias}>
                        <h3>React Native</h3>
                        < img className={styles.icone} src='/assets/react-native.png' alt='icone React Native' />
                    </div>

                    <div className={styles.icones_tecnologias}>
                        <h3>Next.js</h3>
                        < img className={styles.icone} src='/assets/next.png' alt='icone Next JS' />
                    </div>

                    <div className={styles.icones_tecnologias}>
                        <h3>Node JS</h3>
                        < img className={styles.icone} src='/assets/node.png' alt='icone Node JS' />
                    </div>

                    <div className={styles.icones_tecnologias}>
                        <h3>Bootstrap</h3>
                        < img className={styles.icone} src='/assets/bootstrap.png' alt='icone Bootstrap' />
                    </div>

                </div>

            </div>
        </div>

    )
};
export default Tecnologias;