import styles from "./cartWidget.module.css"
import { FaShoppingCart } from 'react-icons/fa';


import React from 'react'

const CartWidget = () => {
    return (
    <div className={styles.CartWidget}>
        <FaShoppingCart />
        <p>3</p>
    </div>
)
}

export default CartWidget