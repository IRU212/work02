import axios from 'axios'
import React from 'react'
import styles from '../../css/cart.module.scss'

function CartCancel(props) {

    const cartId = props.cartId

    const ClickCancel = () => {
        
        axios
            .post(`http://localhost:8000/api/cart/cancel/${cartId}`)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={ClickCancel} className={styles.cartConcel}>
            カートを取り消す
        </div>
    )
}

export default CartCancel