import React from 'react'
import styles from '../../css/cart.module.scss'

function Purchase() {
    return (
        <div className={styles.purchaseButton}>
            <a href="http://localhost:8000/api/cart/delete">購入する</a>
        </div>
    )
}

export default Purchase