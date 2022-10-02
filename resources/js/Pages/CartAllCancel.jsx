import axios from 'axios'
import React from 'react'
import styles from '../../css/cart.module.scss'

function CartAllCancel(props) {

    const userId = props.info

    const ClickDelete = () => {
        const dataDelete = new FormData()
        dataDelete.append("user_id",userId)
    
        axios
            .post(`http://localhost:8000/api/cart/delete`,dataDelete)
            .then((res) => {
                location.reload()
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
        })
    }

    return (
        <div onClick={ClickDelete} className={styles.CartAllNoneButton}>
            カートを空にする
        </div>
    )
}

export default CartAllCancel