import CartWidget from '../CartWidget/cartWidget'
import styles from "./navBar.module.css"


const NavBar = () => {
    return (
        <nav className={styles.container}>
            <a className={styles.logo} href=""><img src="../img/DLogo.png" alt="logo Distribuidora Tittarelli" /></a>
            <h3 className={styles.titulo}>Distribuidora Tiitarelli</h3>
            <div className={styles.anContainer}>
                <a className={styles.anchors} href="">Inicio</a>
                <a className={styles.anchors} href="">Contacto</a>
                <a className={styles.anchors} href="">Acerca de</a>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar