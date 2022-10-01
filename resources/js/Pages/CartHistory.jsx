import React from 'react'
import styles from '../../css/cart.module.scss'
import Header from './Header'

function CartConfirm(props) {
    return (
        <div className={styles.CartHistory}>
            <Header
                info={ props.auth.user }
            />
            CartConfirm
        </div>
    )
}

export default CartConfirm